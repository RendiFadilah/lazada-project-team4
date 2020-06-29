import React from 'react'
import Button from "../../elements/Button"

export default function Navbar() {
    return (
       <header className="spacing-sm">
           
               <nav className="navbar navbar-expand-lg navbar-light">
                   <div className="collapse navbar-collapse">
                       <ul className="navbar-nav ml-auto">
                            <li className={`nav-item`}>
                                <Button className="nav-link lebih-murah" type="link">
                                 LEBIH MURAH DI APP
                                </Button>
                            </li>
                            <li className={`nav-item`}>
                                    <Button className="nav-link seller" type="link">
                                        MENJADI SELLER
                                    </Button>
                            </li>
                            <li className={`nav-item`}>
                                    <Button className="nav-link" type="link">
                                        CUSTOMER CARE
                                    </Button>
                            </li>
                            <li className={`nav-item`}>
                                    <Button className="nav-link" type="link">
                                        LACAK PESANAN
                                    </Button>
                            </li>
                            <li className={`nav-item$`}>
                                    <Button className="nav-link" type="link">
                                        LOGIN
                                    </Button>
                            </li>
                            <li className={`nav-item`}>
                                    <Button className="nav-link" type="link">
                                        DAFTAR
                                    </Button>
                            </li>
                       </ul>      
                    </div>
               </nav>
       </header>
    )
}
