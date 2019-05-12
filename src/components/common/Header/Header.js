import React, { Component } from 'react';
import Logo from "../../../asset/images/logo.png"
import { NavLink } from "react-router-dom";
class Header extends Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-default nav-custom-bar">
                <div class="container">
                    <div class="navbar-header">
                        <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse"
                            class="navbar-toggle collapsed" type="button">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a href="#" class="navbar-brand"><img src={Logo} /></a>
                    </div>
                    <div class="navbar-collapse collapse" id="navbar">

                        <ul class="nav navbar-nav navbar-right">
                            <li class="active">
                                <NavLink exact to="/">Home</NavLink>
                            </li>

                            <li>
                                <NavLink exact to="/about">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/whatwedo">What We Do</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/work">Work</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/happening">Happening</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/joinus">Join Us</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/admin">Login</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/register">Register</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Header;