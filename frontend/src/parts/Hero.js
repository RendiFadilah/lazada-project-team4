import React from 'react'
import Iklan1 from "../assets/images/iklan1.jpg";


export default function Hero({data, props}) {
    return (
        <>
        <div className="bg" style={{background: "#DA2919"}}>
        <section className="container">
                <div className="row">
                    <section className="header-menu">
                        <div className="side-menu">
                            <ul>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                                <li>Aksesoris Elektronik
                                <ul>
                                    <li>Aksesoris Handphone</li>
                                    <li>Aksesoris Komputer</li>
                                    <li>Audio</li>
                                    <li>Aksesoris Berteknologi</li>
                                    <li>Aksesoris Kamera</li>
                                    <li>Penyimpanan Data</li>
                                    <li>Printer</li>
                                    <li>Aksesoris Tablet</li>
                                    <li>Komponene Komputer</li>
                                </ul>
                                </li>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                                <li>Peralatan Elektronik
                                <ul>
                                    <li>Handphone</li>
                                    <li>Laptop</li>
                                    <li>Desktop</li>
                                    <li>Kamera</li>
                                    <li>Game Console</li>
                                    <li>Gadget</li>
                                    <li>Tablet</li>
                                </ul>
                                </li>
                            </ul>
                        </div>

                    </section>
                    <div className="col-8">
                        <img src={Iklan1} style={{width: 990, marginLeft: -15}} alt=""/>
                    </div>
                </div>
        </section>
        </div>

        <div className="container">
            <div className="row mt-2">
                {data.map( (item,index)=>{
                    return(

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="img" style={
                            {
                                width: 260,
                                padding: 2,
                                background: "#ffffff",
                                borderRadius: 20
                            }
                        }>
                            <img src={item.imageUrl} style={{width: 30}} alt=""/>
                            <span>{item.name}</span>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}
