import { applyMiddleware } from 'redux';


export const bindMiddleware = (middleware: any) => applyMiddleware(...middleware);
