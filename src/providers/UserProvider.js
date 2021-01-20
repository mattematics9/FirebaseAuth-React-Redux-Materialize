import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../store/reducers/rootReducer'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const UserProvider = (props) => {

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
