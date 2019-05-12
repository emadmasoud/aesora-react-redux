import React, { Component } from 'react';
import Banner3 from "../../asset/images/banner3.jpg"
class Joinus extends Component {
    state = {}
    render() {
        return (
            <section>
                <div class="banner">
                    <img width="100%" src={Banner3} />

                    <div class="banner-inner-content ban2">
                        <h1>Building for the Future</h1>
                        <p>We've built a team of the best and most talented creatives
in the industry and from all over the world. </p>

                    </div>
                </div>


                <div class="services-section btn-content">
                    <div class="container">

                        <div class="col-md-12 main-join-heading">

                            <p>     We are always looking for smart, talented, hard-working and energetic people to join our team. If you are
                            outstanding at what you do, and you're looking for a career with an established, growing branding company,
                            please forward your resume – and samples of your work – for our review. If we're interested in scheduling
a portfolio review or interview, we'll contact you to set up a meeting.</p>


                            <p> Our organization will, on request, provide accommodations for disabilities to support your participation in all
aspects of our Recruitment Process.</p>


                            <h2>Internships And Co-Ops:</h2>

                            <p>Our internship programs are designed to give students in many fields the opportunity to experience working
                            in a world-class design agency. In turn, we benefit from your enthusiasm, hard work, and fresh talent. To learn
more about current opportunities, please submit a letter and your resume to us.</p>

                            <a href="#">Submit Resume</a>

                            <p>Send all career and internship inquiries to careers@aesorastudio.com only. Please specify the position
or field of interest in the subject line.</p>


                        </div>






                    </div>
                </div>
            </section>
        );
    }
}

export default Joinus;