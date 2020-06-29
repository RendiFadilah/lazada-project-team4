import React from 'react'


export default function FlashSale(props) {
    return (
        <section className="container">
            <h4 className="mb-3">Flash Sale</h4>

            <div className="container bg-white p-3">
                    {
                        props.data.map(( item, index ) => {
                            return(
                            <div className="row">
                                <div className="col-2">
                                    <div className="card border-0">
                                        <img src={item} alt=""/>
                                        <p>L'oreal Paris Revitalift Crystal Micro-Essence</p>
                                        <h4>Rp 119.250</h4>
                                        <div className="d-flex">
                                            <span style={{textDecoration: "line-through"}}>Rp 159.000</span>
                                            <span className="ml-3">50%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
            </div>
        </section>
    )
}
