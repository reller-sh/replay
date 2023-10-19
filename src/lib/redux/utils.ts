
import { services } from '@/services';


type IServices = typeof services

type IKeys = keyof IServices


type Entities<Key extends keyof IServices[IKeys]['slice']> = {
    [i in IKeys]: IServices[i]['slice'][Key]
}

export const extractReducers = <SliceKey extends keyof IServices[IKeys]['slice']>(sk: SliceKey) => {
    const keys = Object.keys(services) as IKeys[];

    const returnee: any = {};

    keys.forEach(key => {
        returnee[key] = services[key].slice[sk];
    });

    return returnee as Entities<SliceKey>;
};


type Sagas = (IServices[IKeys]['sagas'])[]

export const extractSagas = () => {
    const keys = Object.keys(services) as IKeys[];

    const returnee: Partial<Sagas> = [];

    keys.forEach(key => {
        returnee.push(services[key].sagas);
    });

    return returnee;
};

