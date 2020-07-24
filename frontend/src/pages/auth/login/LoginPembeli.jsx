<<<<<<< HEAD
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
=======
// import React, { Components } from 'react';

// function LoginPembeli() {
//     let ButtonStyle = {
//         width: '300px',
//     }
//     let BorderStyle = {
//         background: 'white',
//         border: '1px solid white',
//         borderRadius: '5px',
//         height: '250px',
//     }
//     let ML = {
//         marginLeft: '100px'
//     }
//     let MLStyle = {
//         marginLeft: '180px'
//     }
//     let MLStyle1 = {
//         marginLeft: '170px'
//     }
//     let H5 = {
//         marginTop:'70px',
//         marginLeft:'100px'
//     }
//     let p = {
//         marginTop:'70px',
//         marginLeft:'300px'
//     }
//     return (
//         <div>
//             <div class="container">
//                 <div class="row">
//                     <div class="col-sm">
//                         <h5 style={H5}>Selamat datang diLazada! silakan Login.</h5>
//                     </div>
//                     <div class="col-sm">
//                         <p style={p}>Member baru?<a href="#"> Daftar</a> disini</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="container">
//                 <div class="row" style={BorderStyle}>
//                     <div class="col-sm" style={ML}>
//                         <form>
//                             <div class="form-group">
//                                 <label>Nomor Telepon atau email*</label>
//                                 <input type="text" class="form-control col-sm-7" name="name" />
//                             </div>
//                             <div class="form-group">
//                                 <label>Kata Sandi*</label>
//                                 <input type="password" class="form-control col-sm-7" name="password" />
//                                 <a href="#" style={MLStyle1}>Lupa kata Sandi?</a>
//                             </div>
//                         </form>
//                     </div>
//                     <div class="col-sm">

//                         <button type="button" style={ButtonStyle} class="btn btn-warning text-center text-white">Login</button>
//                         <p>Atau, masuk dengan</p>
//                         <button type="button" style={ButtonStyle} class="btn btn-primary text-center"><i class="fa fa-facebook"></i>Facebook</button>
//                         <br />
//                         <br />
//                         <button type="button" style={ButtonStyle} class="btn btn-danger text-center"><i class="fa fa-google-plus"></i>Google</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoginPembeli
>>>>>>> 75ce392eaf7daeb9a6594557f0339d5b84687a64
