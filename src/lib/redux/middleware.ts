import { applyMiddleware, Middleware } from 'redux';


export const bindMiddleware = (middleware: Middleware[]) => applyMiddleware(...middleware);
