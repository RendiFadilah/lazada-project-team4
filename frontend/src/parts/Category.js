import React from "react";

export default function Category({ data, props }) {
  return (
    <div className="container mt-4">
      <h4>Kategori</h4>
      <div className="wrapper-category bg-white">
        <div className="row row-cols-md-8">
          {data.map((item, index) => {
            return (
              <div className="col">
                <div className="wrapper-content-category p-2 border-right border-top">
                  <img src={item.imageUrl} alt="{item.name}" />
                  <h4
                    className="h5 mt-2"
                    style={{ fontSize: 14, fontWeight: "normal" }}
                  >
                    {item.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
