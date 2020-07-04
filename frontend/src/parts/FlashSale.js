import React from "react";
import Timer from "react-compound-timer";
import { Link } from "react-router-dom";

export default function FlashSale({ data, props }) {
  return (
   
    <section className="container mt-4">
      <h4 className="mb-3">Flash Sale</h4>
      <main className="bg-white" >
        <div className="content p-3">

             <span className="sale-now">
               Dijual Sekarang
             </span>

            
             <span className="flash-title text-black ml-3">
               Berakhir dalam
             </span>

              
             <Timer 
               initialTime={60000 * 30 * 24 + 6000}
               lastUnit="h"
               direction="backward"
               >

               <span className="item-timer">
                 <Timer.Minutes />
               </span>
               :
               <span className="item-timer">
                 <Timer.Hours />
               </span>
               :
               <span className="item-timer">
                 <Timer.Seconds />
               </span>
             </Timer>

             <span className="buy-all-product">
                <Link to="/" className="buy-now">
                    BELANJA SEMUA PRODUK
                </Link>
             </span>
               </div>

              <hr/>
           
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-6">
      {data.map((item,index)=>{
          return(
        <div key={index} className="col-md-2">
          <div className="card-group"  style={{width: "100%"}}>
            <div className="card border-0">
              <img src={item.imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                  <div className="card-item-title">
                    <span className="card-title">
                        {item.name}
                    </span>
                  </div>
                <p className="card-text price">
                 {item.price}
                </p>
                <p className="card-text">
                  <small className="text-disabled">
                      {item.sale} 
                  </small>
                  <small className="text-discount text-gray ml-1">
                      {item.discount} 
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
          )
          })}

      </div>
      </main>
    </section>
  );
}