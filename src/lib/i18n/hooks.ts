

export const useTranslations = (namespace: string = '') => {
    
    return (path: string) => `${namespace}${path}`
}