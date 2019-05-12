import React, { Component } from 'react'
import Header from './header/Header'
import Aside from './aside/Aside'
import Main from './main/Main';

// import routes from '../../../Routes'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


import {
    connect
} from "react-redux";

import './dashboard.css'

class Dashboard extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated === false) {
            this.props.history.push("/admin");
        }
        console.log(this.props.auth.isAuthenticated);
    }
    render() {
        return (
            <div className="dashboard-body">

                <div className="dashboard-sidebar">
                    <Aside />
                </div>
                <div className="dashboard-contentbar">
                    <div className='dashboard-header'>
                        <Header />
                    </div>
                    <div className='dashboard-maincontent'>
                        <Main />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.error
});
export default connect(mapStateToProps)(withRouter(Dashboard))
