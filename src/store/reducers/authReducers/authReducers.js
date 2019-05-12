import { SET_CURRENT_USER, GET_USER_EMAIL } from "../../actions/actionTypes";
import isEmpty from "../../../components/common/dafaultComponents/formValidation/isEmpty";

const initialState = {
    isAuthenticated: false,
    user: {},
    userEmail: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER_EMAIL:
            return { ...state, isAuthenticated: true, userEmail: action.payload };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}
