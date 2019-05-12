import React, { Component } from 'react'
import { MDBBtn } from "mdbreact"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import './header.css'
import { logout } from "../../../../store/actions/authActions/authActions"
export class Header extends Component {
    navNotification = () => {
        let navWqappper = document.querySelector('#dr-profile');
        navWqappper.classList.toggle('dir-profile-block');


    }
    logoutHandler = () => {
        this.props.logout(this.props.history)
    }
    render() {

        return (
            <div>
                <div className="main-header">
                    <div className="header-leftside">
                        <div className="icon-bar-header" id="header-ico">
                            <span className="bt-icon-bar"></span>
                            <span className="bt-icon-bar"></span>
                            <span className="bt-icon-bar"></span>
                        </div>
                        <div className="header-call-info">
                            <span className="hotline">Hotline:16609</span>
                            <span className="tollfree">Toll Free:08000016609</span>
                        </div>
                    </div>
                    <div className="header-right-side">
                        <div className="header-icon-date">
                            <span className="date">SAT,24 MAR</span>
                            <span className="time">5:49</span>
                            <MDBBtn active color="primary" onClick={this.logoutHandler}>Logout</MDBBtn>
                            <Link to="/">Go Home</Link>
                            <span className="font-icon-bell" id="icoDispaly" onClick={this.navNotification}><i class="fas fa-bell ">
                                <ul className="dr-profile" id="dr-profile">
                                    <li >
                                        <div className="dropdown-profile">
                                            <div className="dropdownContent">
                                                <div className="drop-icon">
                                                    <span><i class="fas fa-bell"></i></span>
                                                </div>
                                                <div className="drop-con">
                                                    <p>Requisition No:812997 </p>
                                                    <p>Approved By: Masrur Ahmed</p>
                                                    <p>1min ago</p>
                                                </div>

                                            </div>
                                            <div className="dropdownContent">
                                                <div className="drop-icon">
                                                    <span><i class="fas fa-bell"></i></span>
                                                </div>
                                                <div className="drop-con">
                                                    <p>Requisition No:812997 </p>
                                                    <p>Approved By: Masrur Ahmed</p>
                                                    <p>1min ago</p>
                                                </div>

                                            </div>
                                            <div className="dropdownContent">
                                                <div className="drop-icon">
                                                    <span><i class="fas fa-bell"></i></span>
                                                </div>
                                                <div className="drop-con">
                                                    <p>Requisition No:812997 </p>
                                                    <p>Approved By: Masrur Ahmed</p>
                                                    <p>1min ago</p>
                                                </div>

                                            </div>
                                            <div className="dropdownContent">
                                                <div className="drop-icon">
                                                    <span><i class="fas fa-bell"></i></span>
                                                </div>
                                                <div className="drop-con">
                                                    <p>Requisition No:812997 </p>
                                                    <p>Approved By: Masrur Ahmed</p>
                                                    <p>1min ago</p>
                                                </div>

                                            </div>
                                            <div className="dropdownContent">
                                                <div className="drop-icon">
                                                    <span><i class="fas fa-bell"></i></span>
                                                </div>
                                                <div className="drop-con">
                                                    <p>Requisition No:812997 </p>
                                                    <p>Approved By: Masrur Ahmed</p>
                                                    <p>1min ago</p>
                                                </div>

                                            </div>
                                            <div className="dropdownContent">
                                                <div className="drop-icon">
                                                    <span><i class="fas fa-bell"></i></span>
                                                </div>
                                                <div className="drop-con">
                                                    <p>Requisition No:812997 </p>
                                                    <p>Approved By: Masrur Ahmed</p>
                                                    <p>1min ago</p>
                                                </div>

                                            </div>
                                            <div className="dropdownContent">
                                                <div className="drop-icon">
                                                    <span><i class="fas fa-bell"></i></span>
                                                </div>
                                                <div className="drop-con">
                                                    <p className="req">Requisition No:812997 </p>
                                                    <p className="appr">Approved By: Masrur Ahmed</p>
                                                    <p className="dr-min">1min ago</p>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </i></span>


                        </div>

                        <div className="header-profile-image">
                            {/* <img src={avatar} alt="" /> */}
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default connect(null, { logout })(withRouter(Header))
