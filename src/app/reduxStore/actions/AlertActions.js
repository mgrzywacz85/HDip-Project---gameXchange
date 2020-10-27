import  { REMOVE_ALERT, SET_ALERT } from './constants';
import cuid from 'cuid';

export const setAlert = (msg, alertType) => dispatch => {
    const id = cuid();
    
dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
});

setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), 4000);

};