import { 
    SET_SINGLE_STATE_ITEM,
    SET_FORM_DATA,
    SET_USER_DATA } from './../../utils/consts'

const initialState = {
    isToken: false,
    isModal: false,
    editID: "",
    users: [],
    formData: {
        name: "",
        email: "",
        password: ""
    },
    userData: {
        firstName: "",
        lastName: "",
        gender: "",
        salary: "",
        position: "",
    }
}

function appData(state = initialState, action) {
    switch (action.type) {

        case SET_SINGLE_STATE_ITEM: {
            const {payload} = action;
            return {
                ...state,
                [payload.field]: payload.set
            }
        }

        case SET_FORM_DATA: {
            const {payload} = action;

            if (Object.keys(payload).includes("field")) {
                return {
                    ...state,
                    formData: {
                        ...state.formData,
                        [payload.field]: payload.set
                    } 
                }
            }
            return {
                ...state,
                formData: payload.set 
            }
        }

        case SET_USER_DATA: {
            const {payload} = action;
            if (Object.keys(payload).includes("field")) {
                return {
                    ...state,
                    userData: {
                        ...state.userData,
                        [payload.field]: payload.set
                    } 
                }
            }
            return {
                ...state,
                userData: payload.set 
            }
        }

    }
    return state
}

export default appData