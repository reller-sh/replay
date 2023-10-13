import { services } from '@/services';


type IServices = typeof services

type IKeys = keyof IServices


type Entities<Key extends keyof IServices[IKeys]['slice']> = {
    [i in IKeys]?: IServices[i]['slice'][Key]
}

export const extractReducers = <SliceKey extends keyof IServices[IKeys]['slice']>(sk: SliceKey) => {
    const keys = Object.keys(services) as IKeys[];

    const returnee: Partial<Entities<SliceKey>> = {};

    keys.forEach(key => {
        returnee[key] = services[key].slice[sk];
    });

    return returnee;
};
