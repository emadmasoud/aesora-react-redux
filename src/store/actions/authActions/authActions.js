import axios from "axios";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, GET_USER_EMAIL } from "../actionTypes";
import setAuthToken from "../../../components/common/dafaultComponents/setAuthToken/setAuthToken";

export const loginUser = (userData, history) => dispatch => {

    console.log(userData);
    axios.post("http://localhost:8000/api/admin/user/login", userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("admin_jwt", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch({
                type: SET_CURRENT_USER,
                payload: decoded
            });
            history.push("/admin/dashboard")
        })
        .catch(function (error) {
            console.log(error);
        });
};
export const logout = history => dispatch => {
    dispatch({
        type: SET_CURRENT_USER,
        payload: false
    });
    localStorage.removeItem("admin_jwt")
    history.push("/")
}
// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: GET_USER_EMAIL,
        payload: decoded
    };
};

export const setCurrentUserinfo = decoded => dispatch => {
    console.log(decoded);

    axios.get("http://AGCORP-WS816:4000/global/WindowsAuth", {


        params: { strOfficeEmail: decoded }
    })
        .then(res => {
            dispatch({
                type: SET_CURRENT_USER,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};
