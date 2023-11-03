

export const translate = (namespace: string = '') => {

    return (path: string) => `${namespace}${path}`
}