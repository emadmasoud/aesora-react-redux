import React, { Component } from 'react';

import { Tab, Tabs, } from "react-bootstrap"

class Work extends Component {
    state = {}
    render() {
        return (
            <section>
                <div className="container">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">
                            <h2>nicely done Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sapiente ab necessitatibus? Accusantium, praesentium molestias ut id eaque fugit quis minus quas, magni iste assumenda. Ipsam pariatur possimus impedit ullam!</h2>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <h2>nicely done</h2>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <h2>nicely we</h2>
                        </Tab>
                    </Tabs>;
                </div>

                <div id="tabs" class="portfolio-tabs">

                    <div class="rg-work-nav">
                        <div class="nav-tabs-bar">
                            <div class="container">
                                <ul class="nav nav-tabs rg-nav-tabs animatable fadeInDown">
                                    <li class="active"><a href="#home" data-toggle="tab" aria-expanded="true">ALL</a></li>
                                    <li class=""><a href="#design" data-toggle="tab" aria-expanded="false">DIGITAL   </a></li>
                                    <li class=""><a href="#development" data-toggle="tab" aria-expanded="false">IDENTITY   </a></li>
                                    <li class=""><a href="#apps" data-toggle="tab" aria-expanded="false">MARKETING   </a></li>

                                    <li class=""><a href="#apps3" data-toggle="tab" aria-expanded="false">PACKAGING   </a></li>
                                    <li class=""><a href="#apps4" data-toggle="tab" aria-expanded="false">RESTAURANT   </a></li>
                                    <li class=""><a href="#apps5" data-toggle="tab" aria-expanded="false">RETAIL</a></li>


                                </ul>
                            </div>
                        </div>

                        <div id="myTabContent" class="tab-content">

                            <div class="tab-pane fade active in" id="home">

                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work2.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work2.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work3.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work3.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work4.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work4.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work5.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work5.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work6.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work6.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work7.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work7.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work8.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work8.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>

                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work9.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work2.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work10.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work3.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work11.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work4.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work12.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work5.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work13.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work6.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work14.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work7.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work15.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work8.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work16.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>

                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work17.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work2.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work18.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work3.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work19.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work4.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work20.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>

                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work5.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work21.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work6.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work22.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work7.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work23.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>
                                        <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work8.png" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src="images/work24.png" alt="Short alt text" />
                                                <div class="overlay">
                                                    <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                                </div>
                                            </div>
                                        </a> </div>

                                    </div>
                                </div>

                            </div>






                            <div class="tab-pane fade  " id="design">
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work2.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work2.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work3.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work3.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work4.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work4.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work5.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work5.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                            </div>

                            <div class="tab-pane fade  " id="development">

                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work3.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work3.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work4.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work4.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work5.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work5.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                            </div>
                            <div class="tab-pane fade  " id="apps">
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work2.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work2.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work2.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work2.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work2.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work2.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                            </div>
                            <div class="tab-pane fade  " id="apps3">
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work2.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work2.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>

                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work2.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work2.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                            </div>

                            <div class="tab-pane fade  " id="apps4">
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
    printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>


                            </div>
                            <div class="tab-pane fade  " id="apps5">
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
        printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>
                                <div class="gallery_product col-lg-3 col-md-3 col-sm-3 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/work1.png" data-target="#image-gallery">
                                    <div class="hovereffect"> <img class="img-responsive" src="images/work1.png" alt="Short alt text" />
                                        <div class="overlay">
                                            <p class="info">Amazing picture <span href="#!" class="open-pic">Lorem ipsum is the text for
        printing and editing</span></p>
                                        </div>
                                    </div>
                                </a> </div>



                            </div>


                        </div>



                    </div>


                </div>

            </section>
        );
    }
}

export default Work;