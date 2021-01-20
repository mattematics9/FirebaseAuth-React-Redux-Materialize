const initState = {
    currentUser: {
        name: null,
        email: null,
        img: null
    }
}

const rootReducer = (state = initState, action) => {
    switch (action.type){
        case 'SIGN_UP_USER':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    name: action.payload.name,
                    email: action.payload.email
                }
            }
        case 'SIGN_OUT_USER':
            return {
                ...state,
                currentUser: {
                    name: null,
                    email: null,
                    img: null
                }
            }
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    name: action.payload.name,
                    email: action.payload.email
                }
            }
        case 'EDIT_PROFILE':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    name: action.payload.name,
                    email: action.payload.email
                }
            }
        default:
            return state
    }
}

export default rootReducer