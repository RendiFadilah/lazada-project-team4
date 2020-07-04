import React from 'react'
import Logo from "../../../assets/images/logo.png"
import Kiri from "../../../assets/images/icon_1.png"

export default function LoginPenjual() {
    return (
        <div className="login-penjual">
            <div className="wrapper">
                <nav className="navbar navbar-expand-lg navbar-background">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img src={Logo} style={{width: 150}} alt=""/>
                    </a>
                </div>
                </nav>
            
        
        <div className="container">
            <div className="row">
                <div className="col-7 mt-5">
                    <img src={Kiri} style={{ height: 450}}  alt=""/>
                </div>
                <div className="col-5 mt-5">
                    <div className="wrapper-login">
                    <div className="d-flex">
                        <div className="col login-w-email">
                            <a href="/">Masuk Dengan Email</a>
                        </div>
                        <div className="col login-w-ponsel">
                            <a href="/">Masuk Dengan No Ponsel</a>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
