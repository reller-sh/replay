import {createDirectus, rest} from '@directus/sdk';
import {CustomDirectusTypes} from "./types";


export const client = createDirectus<CustomDirectusTypes>(process.env.NEXT_PUBLIC_DIRECTUS_URL || '')
    .with(rest());
