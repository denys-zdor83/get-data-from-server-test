import { SET_IS_TOKEN, SET_USERS } from './../../utils/consts'

const initialState = {
    isToken: false,
    users: []
}


function appData(state = initialState, action) {
    switch (action.payload) {

        case SET_IS_TOKEN: {
            return {
                ...state,
                isToken: action.payload
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
    }
    return state
}

export default appData