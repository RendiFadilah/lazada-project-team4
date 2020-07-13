import React from "react";
import IconIndonesia from "../../../assets/images/ic-flag-id.png";
import Button from "../../../elements/Button/index";

export default function RegisterPenjual() {
  return (
    <div>
      <div className="container mt-5">
        <h4 className="h5">
          Selamat datang. Satu langkah lagi untuk dapat berjualan dilazada
        </h4>
        <div className="wrapper-register shadow">
          <div className="content-register">
            <div className="content-top">
              <img
                src={IconIndonesia}
                className="shadow rounded-circle"
                style={{ width: 25 }}
                alt=""
              />
              <span style={{ color: "#F37323" }}>Daftar</span>
              <select
                class="form-control col-2"
                style={{ borderRadius: 0, height: 35 }}
              >
                <option>Indonesia</option>
              </select>
            </div>
            <hr></hr>

            <div className="form-inline">
              <div className="form-group mb-2 p-4">
                <label>Jenis Akun</label>

                <input
                  type="radio"
                  name="perorangan"
                  id="perorangan"
                  style={{ marginLeft: 150 }}
                />
                <label className="ml-1">Perorangan</label>

                <input
                  type="radio"
                  name="perusahaan"
                  id="perusahaan"
                  style={{ marginLeft: 100 }}
                />
                <label className="ml-1">Perusahaan</label>
              </div>
              <div
                className="text"
                style={{ fontSize: 14, marginLeft: 237, marginTop: -20 }}
              >
                Untuk melanjutkan proses mendaftar sebagai perorangan, mohon
                <br></br>
                dipastikan Anda memiliki Identitas diri (KTP / Passport) yang
                masih<br></br> berlaku dan telah berusia lebih dari 18 tahun.
              </div>
            </div>

            <div className="form-inline">
              <div className="form-group mb-2 p-4">
                <label>Lokasi Toko</label>
                <select
                  class="form-control"
                  style={{ marginLeft: 140, width: 422, borderRadius: 0 }}
                >
                  <option>Indonesia</option>
                </select>
              </div>
            </div>
            <div className="form-inline">
              <div className="form-group mb-2 p-4">
                <label>Nomor Telepon</label>
                <div class="input-group mb-2" style={{ marginLeft: 115 }}>
                  <div class="input-group-prepend">
                    <div
                      class="input-group-text bg-white"
                      style={{ borderRadius: 0 }}
                    >
                      +62
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputGroup"
                    placeholder=""
                    style={{ width: 370, borderRadius: 0 }}
                  />
                </div>
              </div>
            </div>

            <div className="form-inline">
              <div className="form-group mb-2 p-4">
                <label>Kata Kunci</label>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  style={{ marginLeft: 145, width: 425, borderRadius: 0 }}
                />
              </div>
            </div>

            <div className="form-inline">
              <div className="form-group mb-2 p-4">
                <label style={{ fontSize: 13 }}>
                  Masukkan Ulang Kata Kunci
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  style={{ marginLeft: 50, width: 425, borderRadius: 0 }}
                />
              </div>
            </div>

            <div className="form-inline">
              <div className="form-group mb-2 p-4">
                <label>Alamat Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  style={{ marginLeft: 130, width: 425, borderRadius: 0 }}
                />
              </div>
            </div>
            <div className="form-inline">
              <div className="form-group mb-2 p-4">
                <label>Nama Toko</label>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  style={{ marginLeft: 140, width: 425, borderRadius: 0 }}
                />
              </div>
            </div>

            <Button
              type="link"
              href="/kodepromo"
              className="p-4"
              style={{ fontSize: 14 }}
            >
              <span>Saya memiliki kode promo</span>
            </Button>

            <div
              className="form-group form-check p-4"
              style={{ marginLeft: 70, fontSize: 14 }}
            >
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Saya telah membaca, memahami dan menyetujui{" "}
                <Button type="link" href="/perjanjian">
                  Perjanjian Marketplace Lazada
                </Button>{" "}
                dan{" "}
                <Button type="link" href="/perjanjian-logistik">
                  Perjanjian Jasa <br></br>Logistik
                </Button>
              </label>
            </div>
            <Button
              type="submit"
              className="btn btn-custom"
              style={{
                background: "#26425F",
                color: "#ffffff",
                width: 250,
                padding: 10,
                marginLeft: 300,
              }}
            >
              DAFTAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
