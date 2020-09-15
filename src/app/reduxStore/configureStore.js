import {createStore} from 'redux';
import rootReducer from './rootReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';

export function configureStore() {
    return createStore(rootReducer, devToolsEnhancer())

    //can only have one Store, but many Reducers, which act as a partial Store
    //the rootReducer allows calling many Reducers at the same time and receiving a unified response
}