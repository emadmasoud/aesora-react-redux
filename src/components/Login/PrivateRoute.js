import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/UserActions/authActions";

export default function(ComposedClass, reload, adminRoute = null) {
  class AuthenticationCheck extends Component {
    //intital state is loading because You didn't get
    // data instantly .
    state = {
      loading: true
    };

    componentDidMount() {
      this.props.loginUser();
      //get user data from Reducer
      let user = this.props.auth.isAuthenticated;
      // let isAuth = this.props.user.isAuth;
      console.log(user);
      // if User doesn't login
      // if isAuth doesn't true it would be reload
      if (!user) {
        console.log(user);
        //reload is false
        if (reload) {
          // this.props.history.push("/login");
          this.props.history.push("/");
        }
      } else {
        // if AdminRoute is null ===  isAdmin doesn't true
        // go to user dashboard
        // if (adminRoute && !user.isAdmin) {
        //   this.props.history.push("/dashboard");
        // } else {
        //   // reload === false is true go to user dashboard
        //   if (reload === false) {
        //     this.props.history.push("/user/dashboard");
        //   }
        // }

        // reload === false is true go to user dashboard
        if (reload === false) {
          // return <Redirect from="/" to="/home" />;
          this.props.history.push("/home");
          // this.props.history.push("/dashboard");
        }
      }
      // after everything is finished , setState will be
      // re-render with newState false because we don't
      // show data
      this.setState({ loading: false });
    }

    render() {
      if (this.state.loading) {
        return (
          <div className="main_loader">
            asdf
            {/* <CircularProgress style={{ color: "#2196F3" }} thickness={7} /> */}
          </div>
        );
      }
      // Inside ComposeClass ,we passed our auth
      return <ComposedClass {...this.props} auth={this.props.auth} />;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  return connect(
    mapStateToProps,
    { loginUser }
  )(AuthenticationCheck);
}
