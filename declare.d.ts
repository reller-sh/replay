// noinspection JSUnusedGlobalSymbols

import { compose, Store } from 'redux';


declare global {

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        $reduxStore: Store;
    }

    interface IEnv {
        NODE_ENV: 'development' | 'production'

        NEXT_PUBLIC_DIRECTUS_URL: string
    }
    interface Process extends NodeJS.Process{
        env: IEnv
    }
    interface NodeModule extends NodeModule {
        hot: object
    }
}
