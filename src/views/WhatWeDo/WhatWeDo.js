import React, { Component } from 'react';
import banner4 from "../../asset/images/banner4.jpg"
import Banding from "../../asset/images/branding.jpg"
import Restuarant from "../../asset/images/restaurant.jpg"
import Retain from "../../asset/images/retail.jpg"
import Digital from "../../asset/images/digital.jpg"
import Pakeging from "../../asset/images/packaging.jpg"
import Marketing from "../../asset/images/marketing.jpg"
class WhatWeDo extends Component {
    state = {}
    render() {
        return (
            <section>

                <div class="banner">
                    <img width="100%" src={banner4} />

                    <div class="banner-inner-content ban2">
                        <h1>What we do</h1>
                        <p>  In 2016, we sat around a table and talked about what we
                     want to be as an agency and theology firm, with only few
years since we start we're proud about our achievements. </p>

                    </div>
                </div>



                <div id="tabs" class="portfolio-tabs">

                    <div class="rg-work-nav">


                        <div id="myTabContent" class="tab-content">

                            <div class="tab-pane fade active in" id="home">

                                <div class="col-md-12">
                                    <div class="row">

                                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/branding.jpg" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src={Banding} alt="Short alt text" />
                                                <div class="overlay">

                                                </div>
                                            </div>
                                        </a> </div>

                                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/restaurant.jpg" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src={Restuarant} alt="Short alt text" />
                                                <div class="overlay">

                                                </div>
                                            </div>
                                        </a> </div>

                                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/retail.jpg" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src={Retain} alt="Short alt text" />
                                                <div class="overlay">

                                                </div>
                                            </div>
                                        </a> </div>

                                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/digital.jpg" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src={Digital} alt="Short alt text" />
                                                <div class="overlay">

                                                </div>
                                            </div>
                                        </a> </div>

                                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/packaging.jpg" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src={Pakeging} alt="Short alt text" />
                                                <div class="overlay">

                                                </div>
                                            </div>
                                        </a> </div>

                                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 filter hdpe sprinkle animatable bounceInLeft"> <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-image="images/marketing.jpg" data-target="#image-gallery">
                                            <div class="hovereffect"> <img class="img-responsive" src={Marketing} alt="Short alt text" />
                                                <div class="overlay">

                                                </div>
                                            </div>
                                        </a> </div>




                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>


                </div>

            </section>
        );
    }
}

export default WhatWeDo;