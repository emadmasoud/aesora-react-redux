import React, { Component } from 'react';



class Register extends Component {
    state = {}
    render() {
        return (
            <section>
                <div className="wrapper login-page-wrapper">
                    <div className="container">
                        <div className="card card-custom">
                            <div className="card-header">Login</div>
                            <div className="auth-form-area">
                                <form action="">
                                    <div className="form-group">
                                        <label for="exampleForm2"> Name </label>
                                        <input type="text" id="exampleForm2" class="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleForm2"> Email Address </label>
                                        <input type="text" id="exampleForm2" class="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleForm2"> Password </label>
                                        <input type="password" id="exampleForm2" class="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleForm2">Confirm Password </label>
                                        <input type="password" id="exampleForm2" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="male" name="gender" class="custom-control-input" value="1" checked="" />

                                            <label class="custom-control-label" for="male">
                                                Male
                                </label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="female" name="gender" class="custom-control-input" value="0" />

                                            <label class="custom-control-label" for="female">
                                                Female
                                </label>
                                        </div>
                                    </div>
                                    <div class="form-check mb-2 mr-sm-2">
                                        <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                                        <label class="form-check-label" for="inlineFormCheck">
                                            I agree to your Terms & Conditions and Privacy Policy.
                  </label>
                                    </div>
                                    <div className="form-btn-area">
                                        <button type="submit" className="btn btn-success">Send</button>
                                        <a href="#">Forget your password</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;