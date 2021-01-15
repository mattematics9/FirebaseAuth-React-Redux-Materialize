import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../store/reducers/rootReducer'

export const store = createStore(rootReducer);

export const UserProvider = (props) => {

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
