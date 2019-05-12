import React, {
  Component
} from "react";
import PropTypes from "prop-types";
// import {
//   MDBInput
// } from "mdbreact";
// import ImgPathVar from "../../asstes/img/login.png";
// import "../../components/Login/login.css";
import {
  BrowserRouter as Router,
  Redirect,
  withRouter
} from "react-router-dom";

import {
  connect
} from "react-redux";
import {
  loginUser
} from "../../store/actions/authActions/authActions";
import './login.css';

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    redirect: false,
    errors: {}
  };

  componentDidMount() {
    // if (this.props.auth.isAuthenticated) {
    //   return <Redirect from="/" to="/home" />;
    // }
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.auth.isAuthenticated) {
    //   this.props.history.push("/home");
    // }
  }

  onSubmitForm = value => {
    value.preventDefault();
    const userdata = {
      email: this.state.email,
      password: this.state.password
    };
    // this.props.loginUser(userdata);
    this.props.loginUser(userdata, this.props.history);
    console.log("user data is ", userdata);
  };
  handleOnchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated === true) {
      this.props.history.push("/admin/dashboard");
    }
    console.log(this.props.auth.isAuthenticated);
  }
  render() {
    return (
      <div className="wrapper login-page-wrapper">
        <div className="container">
          <div className="card card-custom">
            <div className="card-header">Login</div>
            <div className="auth-form-area">
              <form action="" onSubmit={this.onSubmitForm}>
                <div className="form-group">
                  <label for="exampleForm2"> Email Address </label>
                  <input type="text" id="exampleForm2" name="email" onChange={this.handleOnchange} class="form-control" />
                </div>
                <div className="form-group">
                  <label for="exampleForm2"> Password </label>
                  <input type="password" id="exampleForm2" name="password" onChange={this.handleOnchange} class="form-control" />
                </div>
                <div class="form-check mb-2 mr-sm-2">
                  <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                  <label class="form-check-label" for="inlineFormCheck">
                    Remember me
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
    );
  }
}

// Login.propTypes = {
//   submit: PropTypes.func.isRequired
// };
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.error
});
// Login = connect(
//   mapStateToProps,
//   {loginUser}
// )(Login);
// export default reduxForm({
//   form: "Login",
//   validate
// })(Login);
export default connect(mapStateToProps, {
  loginUser
}
)(withRouter(Login));
