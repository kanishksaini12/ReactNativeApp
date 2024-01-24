import {createStore} from 'redux';
import goalReducer from './reducers/goalReducer';

const store = createStore(goalReducer);

export default store;
