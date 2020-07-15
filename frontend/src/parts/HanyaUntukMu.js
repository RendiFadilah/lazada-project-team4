import React from "react";

export default function HanyaUntukMu({ data, props }) {
  return (
    <div className="container mt-5">
      <h4>Hanya Untukmu</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
        {data.map((item, index) => {
          return (
            <div className="col mb-2">
              <div className="card shadow" stlye={{ width: "100rem"}}>
                <img src={item.imageUrl} alt="" />
                <div className="card-body">
                  <div className="card-title">{item.name}</div>
                  <div className="card-text price">{item.price}</div>
                  <div className="card-text">
                    <small className="text-disabled">{item.sale}</small>
                    <small className="text-discount text-gray ml-1">
                      {item.discount}
                    </small>
                  </div>
                  <div className="card-tex">
                      <img src={item.rating} style={{width: 60}} alt=""/>
                      <small className="ml-1 text-discount">({item.stock})</small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
