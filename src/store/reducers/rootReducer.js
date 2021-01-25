const initState = {
    currentUser: {
        user: null,
        userFirestoreDoc: null
    }
}

const rootReducer = (state = initState, action) => {

    switch (action.type){
        case 'AUTH_STATE_CHANGED':
        case 'EDIT_PROFILE':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    user: action.payload.user,
                    userFirestoreDoc: action.payload.userFirestoreDoc
                }
            }
        default:
            return state
    }
}

export default rootReducer