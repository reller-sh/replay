import {createDirectus, rest, readGraphqlSdl} from '@directus/sdk';

import pkg from '@next/env';
import path from "path";
import fs from 'fs';
import {finished} from "stream/promises";
import {Readable} from "stream";
const { loadEnvConfig } = pkg;

const env = process.env.NODE_ENV !== 'production';

loadEnvConfig(path.dirname(''), env, { info: () => null, error: console.error });

const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL)
    .with(rest());

const destination = './src/api/public/schema.graphql';


const result = await client.request(readGraphqlSdl('item'));
const fileStream = fs.createWriteStream(destination, { flags: 'r+' });
await finished(Readable.fromWeb(result.body).pipe(fileStream));

