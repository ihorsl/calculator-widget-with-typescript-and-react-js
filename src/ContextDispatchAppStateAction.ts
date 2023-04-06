/**
 * The purpose of this Context is to deliver the main Reducer's dispatch method to all components of the application.
 *
 * The author's homepage: https://ihorsl.com
 */

import React, { createContext } from 'react';
import { AppStateAction } from './AppStateReducer';

const contextDispatchAppStateAction = createContext<React.Dispatch<AppStateAction>>(
    (action) =>
    {
        const errorObject = { message: 'Call to dispatchAppStateAction outside of the AppCalculator' };
        throw errorObject;
    }
);

export default contextDispatchAppStateAction;
