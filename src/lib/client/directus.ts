import {createDirectus, graphql, realtime, staticToken} from '@directus/sdk';
import {CustomDirectusTypes} from "./types";


export const client = createDirectus<CustomDirectusTypes>(process.env.NEXT_PUBLIC_DIRECTUS_URL || '')
    .with(staticToken('JLitmh-AJPrYa2rVZDg0lHYRfV12eXub'))
    .with(graphql())
    .with(realtime({ authMode: 'handshake' }));
