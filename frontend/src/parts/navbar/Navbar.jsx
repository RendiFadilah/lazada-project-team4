import React from "react";
import Button from "../../elements/Button";

export default function Navbar() {
  return (
    <header className="spacing-sm">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item`}>
              <Button className="nav-link lebih-murah" type="link" href="">
                LEBIH MURAH DI APP
              </Button>
            </li>
            <li className={`nav-item`}>
              <Button className="nav-link seller" type="link" href="">
                MENJADI SELLER
              </Button>
            </li>
            <li className={`nav-item`}>
              <Button className="nav-link" type="link" href="">
                CUSTOMER CARE
              </Button>
            </li>
            <li className={`nav-item`}>
              <Button className="nav-link" type="link" href="">
                LACAK PESANAN
              </Button>
            </li>
            <li className={`nav-item$`}>
              <Button className="nav-link" type="link" href="login-pembeli">
                LOGIN
              </Button>
            </li>
            <li className={`nav-item`}>
              <Button className="nav-link" type="link" href="">
                DAFTAR
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
