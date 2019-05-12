import React, { Component } from 'react';


class Contact extends Component {
    state = {}
    render() {
        return (
            <section>
                <div class="contact-body-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="contact-maain-heading">Contact Me</h3>
                                <p class="contact-maiin-pre">Fields marked with an * are required</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 inpt-detail">
                                <p>Name</p>
                                <input type="text" />
                            </div>
                            <div class="col-md-12 inpt-detail">
                                <p>Email</p>
                                <input type="text" />
                            </div>
                            <div class="col-md-12 inpt-detail">
                                <p>Message </p>
                                <textarea ></textarea>
                                <a href="#" class="send-frm">Send</a> </div>
                            <div class="col-md-12 form-detail">
                                <p>Reach out with any questions you have</p>
                                <h4>Call us directly<br />
                                    <span>+1 (647) 343-1845</span> </h4>
                                <h4>Contact email<br />
                                    <a href="#">aesorastudio@gmail.com</a> </h4>
                            </div>
                            <div class="col-md-12 form-center">
                                <p>Ready to start creating an amazing project?</p>
                                <a href="#">Launch Project Builder!</a> </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
