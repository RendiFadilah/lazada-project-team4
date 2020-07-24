import React from "react";
import Navbar from "../parts/navbar/Navbar.jsx";
import NavbarLazada from "../parts/navbar/NavbarLazada.jsx";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <NavbarLazada />

      <div className='container' style={{ padding: "20px" }}>
        <div className='row'>
          <div className='col-8'>
            <div className='bg-white' style={{ padding: "5px" }}>
              <input className='mr-2' type='checkbox' />
              <span>Pilih semua barang</span>
              <span className='float-sm-right'>
                <i class='fa fa-trash-alt'></i>Hapus
              </span>
            </div>
            <div
              className='bg-white'
              style={{ padding: "5px", marginTop: "10px" }}
            >
              <input className='mr-2' type='checkbox' />
              <span>Nama Penjual</span>
              <i className='fa fa-chevron-right ml-2'></i>
            </div>
            <div className='bg-white' style={{ padding: "5px" }}>
              <input className='mr-2' type='checkbox' />
              <span></span>
            </div>
          </div>
          <div className='col-4'>Lokasi</div>
        </div>
      </div>
    </div>
  );
}
