import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from "react-router-dom"
// component import
import Header from "./components/common/Header/Header"
import Footer from "./components/common/Footer/Footer"
// import Login from "./components/Login/Login"
// pages import
import Home from "./views/Home/Home"
import Work from "./views/Work/Work"
import About from "./views/About/About"
import WhatWeDo from "./views/WhatWeDo/WhatWeDo"
import Happening from "./views/Happening/Happening"
import Joinus from "./views/Joinus/Joinus"
import Contact from "./views/Contact/Contact"
import Register from "./views/Register/Register"
import Dashboard from "./components/common/dashboard/Dashboard";
import Login from "./components/Login/Login";
class App extends Component {

  render() {

    let plp = this.props.location.pathname;
    let header;
    let footer;
    if (plp === "/" || plp === "/work" || plp === "/login" || plp === "/about" || plp === "/whatwedo" || plp === "/happening" || plp === "/joinus" || plp === "/contact" || plp === "/register") {
      header = (
        <Header></Header>
      )
      footer = (
        <Footer></Footer>
      )
    }
    return (

      <div className="App" >
        {/* <Header></Header> */}
        {header}
        < Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/work" component={Work} />
        <Route exact path="/about" component={About} />
        <Route exact path="/whatwedo" component={WhatWeDo} />
        <Route exact path="/happening" component={Happening} />
        <Route exact path="/joinus" component={Joinus} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        {footer}
      </div>

    );
  }

}

export default withRouter(App);
