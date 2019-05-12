import React, { Component } from 'react';

import fIcon from "../../../asset/images/f-icon.png"
import gIcon from "../../../asset/images/g-icon.png"
import iIcon from "../../../asset/images/insta-icon.png"
import inIcon from "../../../asset/images/in-icon.png"
class Footer extends Component {
    state = {}
    render() {
        return (
            <div class="footer">

                <div class="container">
                    <div class="col-md-6 email-section">
                        <h3 class="send-main-heading">Subscribe Our Newsletter</h3>
                        <div class="input-send">
                            <input type="text" placeholder="Enter your email address... " />
                            <a href="#"><img src="images/send-icon.png" /></a>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <ul class="social-list">
                            <li>
                                <p>Follow us:</p>
                            </li>
                            <li><a href="#"><img src={fIcon} /></a></li>
                            <li><a href="#"><img src={gIcon} /></a></li>
                            <li><a href="#"><img src={iIcon} /></a></li>
                            <li><a href="#"><img src={inIcon} /></a></li>
                        </ul>

                    </div>
                    <div class="col-md-12 footer-menu">
                        <ul class="footer-links-list">
                            <li class="active"><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services </a></li>
                            <li><a href="#">Portfolio </a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog </a></li>
                            <li><a href="#">Contact us </a></li>
                        </ul>
                        <p>Copyright &copy; 2018, Aesora Studio All rights reserved | Privacy | Terms  Conditions </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;