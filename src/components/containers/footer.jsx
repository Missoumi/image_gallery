import React, { Component } from "react";
import AboutUs from "../atom/AboutUs";
import FormMessage from "../atom/FormMessage";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="row w-100" style={{marginLeft:0,}}>
        <AboutUs />
        <FormMessage />
      </div>
    );
  }
}

export default Footer;
