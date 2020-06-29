import React, {Component} from 'react'
import NavbarTop from "../parts/navbar/Navbar";
import landingPageJson from "../json/landingPage.json"
import NavbarLazada from '../parts/navbar/NavbarLazada';
import Hero from "../parts/Hero";
import FlashSale from "../parts/FlashSale"


export default class LandingPage extends Component {
    render(){
        return(
            <>
                <NavbarTop {...this.props}></NavbarTop>
                <NavbarLazada {...this.props}></NavbarLazada>
                <Hero {...this.props}></Hero>
                <FlashSale {...this.props}></FlashSale>
            </>
        );
    }
}
