import React from "react";


export default function KoleksiTerbaik({ data, props }) {
  return (
    <div className="container mt-5">
      <div className="text-titlle d-flex align-items-center mt-3">
        <h4>Koleksi Terbaik</h4>
        <span className="ml-auto">Lanjutkan Belanja</span>
      </div>

      <div className="wrapper-koleksi-terbaik bg-white m-2 p-3">
        <div className="row row-cols-4">
          {data.map((item, index) => {
            return (
                <>
              <div className="col mt-4 border-right">
                  <div className="text-center">
                    <span class="text-center">{item.name}</span>{" "}
                    <br></br>
                    <span class="text-center align-items-center font-smaller">
                      {item.stock}
                    </span>
                  </div>

                  <div className="img-wrapper">
                    <img src={item.imageUrl1} alt="" />
                    <img src={item.imageUrl2} alt="" />
                    <img src={item.imageUrl3} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
