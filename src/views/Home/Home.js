import React, { Component } from 'react';



// images
import BannerImage from "../../asset/images/banner-bc.jpg"
import BoxImage1 from "../../asset/images/box1.png";
import BoxImage2 from "../../asset/images/box2.png";
import BoxImage3 from "../../asset/images/box3.png";
import Arow from "../../asset/images/arow.png";
import Blue from "../../asset/images/blue-sky.png";
import White from "../../asset/images/white-sky.png"
import Watch from "../../asset/images/watch.png";
import Code from "../../asset/images/code-bc.png";
import Icon1 from "../../asset/images/icon1.png";
import Icon2 from "../../asset/images/icon2.png";
import Icon3 from "../../asset/images/icon3.png";
import Icon4 from "../../asset/images/icon4.png";
import Icon5 from "../../asset/images/icon5.png";
import Icon6 from "../../asset/images/icon6.png";
import Wicon1 from "../../asset/images/wy-icon1.png";
import Wicon2 from "../../asset/images/wy-icon2.png";
import Wicon3 from "../../asset/images/wy-icon3.png";
import Star from "../../asset/images/stars.png";
import ClientLogo from "../../asset/images/clint-logo.png";
class Home extends Component {
    state = {}
    render() {
        return (
            <section>
                <div class="banner">
                    <img src={BannerImage} width="100%" />

                    <div class="banner-inner-content">
                        <h1>START CREATING.</h1>
                        <p>Lorem Ipsum is the simply dummy text of the printing </p>
                        <a href="#">GET STARTED </a>
                    </div>
                </div>

                <div class="body-section">
                    <div class="container">
                        <div class="col-md-4">
                            <h3 class="main-get-heading">
                                Get the<br />
                                Digital Edge Your<br />
                                <span> Business Deserves</span>, <br />
                                With <span> Aesora Studio!</span>
                            </h3>
                        </div>

                        <div class="col-md-4">
                            <div class="box-detail box1">
                                <img src={BoxImage1} class="full" />

                                <h3>Brand Development </h3>
                                <p>Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem
                                  Ipsum has been the industry's standard
                                  dummy text ever since the 1500s.
          </p>
                                <a href="#">Learn More <img src={Arow} /></a>
                            </div>
                        </div>


                        <div class="col-md-4 box-right">
                            <div class="box-detail box-2-3 box1">
                                <img src={BoxImage2} class="full" />

                                <h3>Marketing toolkit </h3>
                                <p>Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem
                                  Ipsum has been the industry's standard
                                  dummy text ever since the 1500s.
          </p>
                                <a href="#">Learn More <img src={Arow} /></a>
                            </div>
                            <div class="box-detail box-2-3 box1">
                                <img src={BoxImage3} class="full" />

                                <h3>Web Strategy </h3>
                                <p>Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem
                                  Ipsum has been the industry's standard
                                  dummy text ever since the 1500s.
          </p>
                                <a href="#">Learn More <img src={Arow} /></a>
                            </div>
                        </div>

                    </div>
                    <img src={White} width="100%" />
                </div>

                <div class="self-detail">

                    <div class="container">
                        <div class="col-md-5 watch-section">
                            <img src={Watch} class="watch-bc" />
                            <img src={Code} class="prototype-bc" />
                        </div>
                        <div class="col-md-7 watch-section-detail">
                            <h3 class="main-get-heading text-right-way">
                                Our <span>Design</span><br />
                                <span>Development</span>
                                <br />
                                Process
                                </h3>
                            <ul class="skilss-list">
                                <li><a href="#"><img src={Icon1} /><span> Requirement Analysis</span></a></li>
                                <li><a href="#"><img src={Icon2} /><span> Design</span></a></li>
                                <li><a href="#"><img src={Icon3} /><span> Development</span></a></li>
                                <li><a href="#"><img src={Icon4} /> <span>Quality Analysis</span></a></li>
                                <li><a href="#"><img src={Icon5} /><span> Deployment</span></a></li>
                                <li><a href="#"><img src={Icon6} /><span> Maintenance  Marketing</span></a></li>
                            </ul>
                        </div>


                    </div>


                    <div class="blue-ky">
                        <img src={Blue} width="100%" class="blue-sky" />
                        <div class="main-wy-us">

                            <h2 class="why-us-heading">Why People<br />
                                Choose US?</h2>

                            <div class="col-md-4 wy-box">
                                <img src={Wicon1} />
                                <h3>Professional Expertise</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing
                                  and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy </p>

                            </div>
                            <div class="col-md-4">
                                <div class="col-md-12 wy-box why-box2">
                                    <img src={Wicon2} />
                                    <h3>Professional Expertise</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                      and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy </p>

                                </div>
                                <div class="col-md-12 wy-box why-box3">
                                    <img src={Wicon3} />
                                    <h3>Professional Expertise</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                      and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy </p>

                                </div>
                            </div>
                            <div class="col-md-4 bubble-box-pad">
                                <div class="bubble-box">
                                    <h4> Digital Engineering
              <span>Solution for your Business</span>
                                    </h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                      and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy </p>
                                    <a href="#">Discuss Your Project <img src={Arow} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clint-section">
                    <div class="container">
                        <div class="col-md-4">

                            <div class="clint-box">
                                <h3>What our customers
                                  say about us
          </h3>
                                <p>Leadership is not about a title or a
                                  designation. It's about impact,
                                  influence and inspiration. Impact
                                  involves getting results, influence is
                                  about spreading the passion you
                                  have for your work, and you have
                                  to inspire team-mates and
            customers.</p>
                                <a href="#"> By -<span> Abdul Basit</span></a>
                                <img src={Star} />

                            </div>
                        </div>

                        <div class="col-md-8 clint-detail">
                            <h2 class="main-clint-heading">We Love<br />
                                Our <span>Clients</span></h2>

                            <img src={ClientLogo} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;