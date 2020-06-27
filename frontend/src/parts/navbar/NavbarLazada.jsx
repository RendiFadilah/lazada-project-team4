import React from 'react'
import LogoLazada from "../../assets/images/logo-lazada.png";
import IconCart from "../../assets/images/icon_cart.svg"
import LazadaCredit from "../../assets/images/lazada-credit.png";

export default function Navbar() {
    return (
        <header className="spacing-sm">
           <div className="container-fluid search-bar">
            <div className="row">
               <div className="container">
                    <div className="col-auto">
                        <img src={LogoLazada} style={{width: 200}} alt=""/>
                    </div>
                    </div>
                    <div className="col-10">
                        <div className="wrap">
                            <div className="search">
                                <input type="text" className="searchBar" placeholder="Cari di Lazada" />
                                <button type="submit" className="search-button">
                                    <i className="fa fa-search"></i>
                                </button>
                                <img src={IconCart} style={{ width: 30, marginLeft: 30}} alt=""/>
                                <img src={LazadaCredit} style={{ width: 150, marginLeft: 30}} alt=""/>
                        </div>
                    </div>
                    
                </div>
            </div>      
            </div>
            </header>
    
    )
}
