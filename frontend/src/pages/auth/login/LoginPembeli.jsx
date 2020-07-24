import React from "react";
import Navbar from "../../../parts/navbar/Navbar";
import NavbarLazada from "../../../parts/navbar/NavbarLazada";
import Button from "../../../elements/Button/index";

export default function LoginPembeli() {
  return (
    <div>
      <Navbar />
      <NavbarLazada />

      <div className="container">
        <h4 className="text-title">Selamat Datang diLazada! Silahkan Login.</h4>
        <div className="wrapper-login-pembeli">
          <div className="row">
            <div className="col">
              <form action="">
                <div className="form-group">
                  <label htmlFor="email">Nomor Telepon atau Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Silahkan masukkan Nomor Telepon Anda Atau Email"
                  />
                </div>
                <div className="form-group password">
                  <label htmlFor="email">Kata Sandi</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Mohon isi kata sandi Anda"
                  />
                </div>

                <Button
                  type="link"
                  href="/forgetpassword"
                  className="float-right"
                >
                  Lupa Kata Sandi?
                </Button>
              </form>
            </div>
            <div className="col ml-5 mt-4">
              <Button className="btn btn-login">LOGIN</Button>
              <span>Atau,masuk dengan</span>
              <Button className="btn btn-facebook btn-primary">
                <i class="fa fa-facebook"></i> Facebook
              </Button>
              <Button className="btn btn-google btn-danger">
                <i class="fa fa-google-plus"></i> Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
