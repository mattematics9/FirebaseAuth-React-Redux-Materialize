const initState = {
    currentUser: {
        userAuth: null,
        userFirestoreDoc: null
    }
}

const rootReducer = (state = initState, action) => {
    switch (action.type){

        case 'AUTH_STATE_CHANGED':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    userAuth: action.payload.userAuth,
                    userFirestoreDoc: action.payload.userFirestoreDoc
                }
            }
        case 'EDIT_PROFILE':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    userAuth: action.payload.userAuth,
                    userFirestoreDoc: action.payload.userFirestoreDoc
                }
            }
        default:
            return state
    }
}

export default rootReducer