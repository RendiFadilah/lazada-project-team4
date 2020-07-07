import React from "react";

export default function LazMall({ data, props }) {
  return (
    <div>
      <div className="container mt-5">
      <div className="text-titlle d-flex align-items-center mt-3">
        <h4>LazMall</h4>
        <span className="ml-auto">Lanjutkan Belanja</span>
      </div>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-6 justify-content-center">
          {data.map((item, index) => {
            return (
              <div className="col">
                <div className="card shadow-lg mb-2" style={{ width: "11rem" }}>
                  <img src={item.imageUrl} className="card-img-top" alt="" />
                  <div className="card-body">
                    <img
                      src={item.imageBrand}
                      style={{ width: 50, marginLeft: 45, marginTop: -80 }}
                      className="shadow-lg"
                      alt=""
                    />
                    <h5
                      className="card-title text-center"
                      style={{ fontSize: 15 }}
                    >
                      {item.nameBrand}
                    </h5>
                    <h5
                      className="card-text font-weight-light text-center"
                      style={{ fontSize: 15, fontWeight: "lighter" }}
                    >
                      {item.contentBrand}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
