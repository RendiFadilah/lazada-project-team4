import React from "react";
import Button from "../../elements/Button/index";

export default function Details() {
  return (
    <>
      <div className="container">
        <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
              <Button type="link" href="">
                <li
                  className="breadcrumb-item mx-2 align-self-center"
                  style={{ fontSize: 14 }}
                >
                  Audio
                </li>
              </Button>
              <span style={{ fontSize: 16 }}> > </span>
              <Button type="link" href="">
                <li
                  className="breadcrumb-item mx-2 align-self-center"
                  style={{ fontSize: 14 }}
                >
                  Aksesoris Home Audio
                </li>
              </Button>
              <span style={{ fontSize: 16 }}> > </span>
              <Button type="link" href="">
                <li
                  className="breadcrumb-item mx-2 align-self-center"
                  style={{ fontSize: 14 }}
                >
                  Kabel Home Audio
                </li>
              </Button>
              <span style={{ fontSize: 16 }}> > </span>
              <Button type="link" href="">
                <li
                  className="breadcrumb-item mx-2 align-self-center active"
                  style={{ fontSize: 14 }}
                >
                  INBEX Headphone Splitter/Male to 2 Female /3.5mm Headphone
                  Audio Splitter/ for headset PC Adapter
                </li>
              </Button>
            </ol>
          </nav>
        </div>
      </div>

      <section className="container bg-white">
        <div className="wrapper-details">
          <div className="row">
            <div className="col">
              
            </div>
            <div className="col-5">A</div>
            <div className="col">A</div>
          </div>
        </div>
      </section>
    </>
  );
}
