import React, {Component,useE} from 'react'
import NavbarTop from "../parts/navbar/Navbar";
import NavbarLazada from '../parts/navbar/NavbarLazada';
import Hero from "../parts/Hero";
import FlashSale from "../parts/FlashSale"
import KoleksiTerbaik from "../parts/KoleksiTerbaik"
import DataLanding from '../json/landingPage.json';
export default class LandingPage extends Component {
    
    render(){
        return(
            <>
                <NavbarTop {...this.props}></NavbarTop>
                <NavbarLazada {...this.props}></NavbarLazada>
                <Hero data={DataLanding.lazadaFeatured}  {...this.props}></Hero>
                <FlashSale data={DataLanding.flashSale} {...this.props}></FlashSale>
                <KoleksiTerbaik data={DataLanding.koleksiTerbaik} {...this.props}></KoleksiTerbaik>
            </>
        );
    }
}
