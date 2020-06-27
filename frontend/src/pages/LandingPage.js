import React, {Component} from 'react'
import NavbarTop from "../parts/navbar/Navbar";
import NavbarLazada from '../parts/navbar/NavbarLazada';


export default class LandingPage extends Component {
    render(){
        return(
            <>
                <NavbarTop {...this.props}></NavbarTop>
                <NavbarLazada {...this.props}></NavbarLazada>
            </>
        );
    }
}
