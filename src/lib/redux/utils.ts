import {services} from '@/services';


type IServices = typeof services

type IKeys = keyof IServices


type Entities<Key extends keyof IServices[IKeys]['slice']> = Key extends 'actions' ? {
    [i in IKeys]: IServices[i]['slice'][Key] & IServices[i]['subActions']
} : {
    [i in IKeys]: IServices[i]['slice'][Key]
}

export const extractReducers = <SliceKey extends keyof IServices[IKeys]['slice']>(sk: SliceKey) => {
    const keys = Object.keys(services) as IKeys[];

    return Object.fromEntries(keys.map(key => (
        [key, sk === 'actions' ? { ...(services[key].slice[sk] as any), ...services[key].subActions} : services[key].slice[sk]]
    ))) as Entities<SliceKey>;
};

type Sagas = (IServices[IKeys]['sagas'])[]

export const extractSagas = () => {
    const keys = Object.keys(services) as IKeys[];

    let returnee: any[] = [];

    keys.forEach(key => {
        returnee = [...returnee, ...services[key].sagas];
    });


    return returnee as Partial<Sagas>;
};

