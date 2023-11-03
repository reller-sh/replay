

export enum LoadingStatus {
    NEVER = 'NEVER',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
}


export type Nullable <Type> = Type | null