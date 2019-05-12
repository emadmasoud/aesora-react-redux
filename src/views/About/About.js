import React, { Component } from 'react';

import AboutBc from "../../asset/images/about-bc.jpg"
import Abt1 from "../../asset/images/abt1.png";
import Abt2 from "../../asset/images/abt2.png";
import Abt3 from "../../asset/images/abt3.png";
import Abt4 from "../../asset/images/abt4.png";
import Abt5 from "../../asset/images/abt5.png";
import Abt6 from "../../asset/images/abt6.png";
import Abt7 from "../../asset/images/abt7.png";
import AboutF1 from "../../asset/images/about-f1.png";
import AboutF2 from "../../asset/images/about-f1.png";
class About extends Component {
    state = {

    }
    render() {
        return (
            <section>


                <div class="banner">
                    <img width="100%" src={AboutBc} />

                    <div class="banner-inner-content ban2 ban3">
                        <h1 class="about-us-new">WHAT WE DO</h1>
                        <span>We research, work, deliver and party</span>
                        <p>Aesora Technologies  Ltd. is an organization which believes in the dignity<br />
                            of work. The beliefs are well translated into practice. This is why we receive<br />
                            fruitful results at the end. Here is a brief picture of what we do. </p>

                    </div>
                </div>



                <div class="services-section">
                    <div class="container">
                        <div class="about-us-detail">
                            <div class="row">
                                <div class="col-md-4 services-boxws">
                                    <img src={Abt1} />
                                    <h4>Web Development</h4>
                                    <p>        Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.Curabitur
                                              In tincidunt dapibus tellus,
</p>

                                </div>
                                <div class="col-md-4 services-boxws">
                                    <img src={Abt2} />
                                    <h4>Applicaiton Development</h4>
                                    <p>        Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.Curabitur
                                              In tincidunt dapibus tellus,
</p>

                                </div>
                                <div class="col-md-4 services-boxws">
                                    <img src={Abt3} />
                                    <h4>Software Development</h4>
                                    <p>        Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.Curabitur
                                              In tincidunt dapibus tellus,
</p>

                                </div>
                            </div>


                            <div class="row">
                                <div class="col-md-4 services-boxws">
                                    <img src={Abt4} />
                                    <h4>Logo Design</h4>
                                    <p>        Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.Curabitur
                                              In tincidunt dapibus tellus,
</p>

                                </div>
                                <div class="col-md-4 services-boxws">
                                    <img src={Abt5} />
                                    <h4>Graphic and Animations</h4>
                                    <p>        Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.Curabitur
                                              In tincidunt dapibus tellus,
</p>

                                </div>
                                <div class="col-md-4 services-boxws">
                                    <img src={Abt6} />
                                    <h4>Branding</h4>
                                    <p>        Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.Curabitur
                                              In tincidunt dapibus tellus,
</p>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 services-boxws">

                                </div>
                                <div class="col-md-4 services-boxws">
                                    <img src={Abt7} />
                                    <h4>Graphic and Animations</h4>
                                    <p>        Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.Curabitur
                                              In tincidunt dapibus tellus,
</p>

                                </div>
                                <div class="col-md-4 services-boxws">


                                </div>
                            </div>
                        </div>


                        <div class="about-us-inner-detail">
                            <div class="row">
                                <div class="col-md-12 about-heading-f">
                                    <h1>Our Expertise</h1>
                                    <p>We are experts in leading technology and trendy frameworks</p>

                                </div>

                                <div class="col-md-7 about-detail-list">
                                    <ul>
                                        <li><h4>Ionic</h4><span>Ionic is an open source software development kit for hybrid applications. It is simply awesome. It allows you to customize your apps for iOs and android at the same time. It saves time, money, and effort without compromising on the splendor of the outcome. At Aesora Technology , we deliver unparalleled hybrid applications using ionic. We mix it with the native app for better performance.</span></li>
                                        <li><h4>Meteor</h4><span>It is yet another Javascript framework which uses cross platform codes, that is; web, iOs, and android. It is based on jQuery and can be used with any Javascript UI widget library. Aesora Technology  specializes in building apps and web using this framework. It allows fast prototyping and simple automation.</span></li>
                                        <li><h4>Meanstack</h4><span>Meanstack is a super amazing tool kit used to develop web. It offers a collection of Javascript based technologies. The best part about it is that one single person can fashion a complete web on both the fronts for you. It is simpler, quicker, and better.</span></li>
                                    </ul>
                                </div>
                                <div class="col-md-5 about-f1">
                                    <img src={AboutF1} />
                                </div>
                            </div>
                            <div class="row row-pas">

                                <div class="col-md-8 about-detail-skills">
                                    <img src={AboutF2} />
                                </div>
                                <div class="col-md-4 about-f2">
                                    <h2>How we work</h2>
                                    <p>Aesora Technologies  Ltd. is an organization which believes in the dignity</p>
                                    <ul>
                                        <li>INTERVIEW



DELIVERY</li>
                                        <li>PLAN</li>
                                        <li>DESIGN</li>
                                        <li>DEVELOP,MENT</li>
                                        <li>
                                            TESTING</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;