import {combineReducers} from 'redux';
import postReducer from '../../posts/postsReducer';

const rootReducer = combineReducers({
    post: postReducer
})

export default rootReducer;