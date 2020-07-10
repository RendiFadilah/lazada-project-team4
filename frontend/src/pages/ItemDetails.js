import React, { Component } from "react";
import NavbarTop from "../parts/navbar/Navbar";
import NavbarLazada from "../parts/navbar/NavbarLazada";
import Detail from "../parts/details/Details";

export default class ItemDetails extends Component {
  render() {
    return (
      <>
        <NavbarTop {...this.props}></NavbarTop>
        <NavbarLazada {...this.props}></NavbarLazada>
        <Detail {...this.props}></Detail>
      </>
    );
  }
}
