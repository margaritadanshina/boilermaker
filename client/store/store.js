import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk';
import { creatrLogger } from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        creatrLogger()
    )
)

export default store; 