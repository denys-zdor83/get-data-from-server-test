import { 
    SET_IS_TOKEN, 
    SET_USERS,
    SWITCH_MODAL } from './../../utils/consts'

const initialState = {
    isToken: false,
    users: [],
    isModal: false
}

function appData(state = initialState, action) {
    switch (action.type) {

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

        case SWITCH_MODAL: {
            return {
                ...state,
                isModal: action.payload
            }
        }

    }
    return state
}

export default appData