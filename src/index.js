import React from 'react';
import ReactDOM from 'react-dom';


// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// css
import "./asset/css/custom.css";
import "./asset/css/font-awesome.css";
import "./asset/css/slick.css";
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import store from "./store/Store";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import setAuthToken from "./components/common/dafaultComponents/setAuthToken/setAuthToken"
import { SET_CURRENT_USER } from './store/actions/actionTypes'
// import "https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800";
// import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";


import App from './App';
import * as serviceWorker from './serviceWorker';

let token = localStorage.getItem('admin_jwt');
if (token) {
    let decode = jwtDecode(token);
    setAuthToken(token);
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decode
    });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>



    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
