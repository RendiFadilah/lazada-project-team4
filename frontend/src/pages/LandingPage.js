import React, {Component} from 'react'
import NavbarTop from "../parts/navbar/Navbar";
import NavbarLazada from '../parts/navbar/NavbarLazada';
import Hero from "../parts/Hero";
import FlashSale from "../parts/FlashSale"
import KoleksiTerbaik from "../parts/KoleksiTerbaik"
import LazMall from "../parts/LazMall";
import Category from "../parts/Category";
import HanyaUntukMu from "../parts/HanyaUntukMu"

import DataLanding from '../json/landingPage.json';
import Footer from "../parts/footer/Footer";

export default class LandingPage extends Component {
    
    render(){
        return(
            <>
                <NavbarTop {...this.props}></NavbarTop>
                <NavbarLazada {...this.props}></NavbarLazada>
                <Hero data={DataLanding.lazadaFeatured}  {...this.props}></Hero>
                <FlashSale data={DataLanding.flashSale} {...this.props}></FlashSale>
<<<<<<< HEAD
                <KoleksiTerbaik data={DataLanding.KoleksiTerbaik} {... this.props}></KoleksiTerbaik>
                <Footer {...this.props}></Footer>
=======
                <KoleksiTerbaik data={DataLanding.koleksiTerbaik} {...this.props}></KoleksiTerbaik>
                <LazMall data={DataLanding.lazMall} {...this.props}></LazMall>
                <Category data={DataLanding.Category} {...this.props}></Category>
                <HanyaUntukMu data={DataLanding.HanyaUntukMu} {...this.props}></HanyaUntukMu>
          

>>>>>>> d84bc7e95729f9f13346a709136ff23ab1d41d7a
            </>
        );
    }
}
