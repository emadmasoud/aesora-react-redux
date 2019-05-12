import axios from "axios";
import {FETCH_NAVIGATION} from '../actionTypes'


export const fetchMenuList = () => dispatch => {
  axios
    .get("http://AGCORP-WS816:4000/dbrole/menulist", {
      params: { isEnable: true }
    })
    .then(res =>
      dispatch({
        type: FETCH_NAVIGATION,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
