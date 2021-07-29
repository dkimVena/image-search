import { combineReducers } from 'redux';
import imageSearch from './imageSearch';

const rootReducer = combineReducers({
    imageSearch
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;