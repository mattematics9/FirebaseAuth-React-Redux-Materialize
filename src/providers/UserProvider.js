import React, { useEffect } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { auth } from '../firebase/config'

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const UserProvider = (props) => {

    // useEffect(() => {
    //     auth.onAuthStateChanged(function(user) {
    //         console.log(user);
    //         store.dispatch({
    //             type: 'AUTH_STATE_CHANGED', 
    //             payload: {
    //                 currentUser: {

    //                 }
    //             }
    //         })
    //     });
    // })


    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
