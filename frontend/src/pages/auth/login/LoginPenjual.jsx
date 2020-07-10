import React, { Components } from 'react';

function LoginPembeli() {
    let ButtonStyle = {
        width: '300px',
    }
    let BorderStyle = {
        background: 'white',
        border: '1px solid white',
        borderRadius: '5px',
        height: '250px',
    }
    let ML = {
        marginLeft: '100px'
    }
    let MLStyle = {
        marginLeft: '180px'
    }
    let MLStyle1 = {
        marginLeft: '170px'
    }
    let H5 = {
        marginTop:'70px',
        marginLeft:'100px'
    }
    let p = {
        marginTop:'70px',
        marginLeft:'300px'
    }
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h5 style={H5}>BUKALAPAK</h5>
                    </div>
                    <div class="col-sm">
                        <h5 style={H5}>Seller center</h5>
                    </div>
                    
                </div>
            </div>
            <div class="container">
                <div class="row" style={BorderStyle}>
                    <div class="col-sm" style={ML}>
                        <form>
                            <div class="form-group">
                                <label>E-mail / Username / Nomor Handphone</label>
                                <input type="text" class="form-control col-sm-7" name="name" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control col-sm-7" name="password" />
                                <a href="#" style={MLStyle1}>Lupa kata Sandi?</a>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm">

                        <button type="button" style={ButtonStyle} class="btn btn-warning text-center text-white">Login</button>
                        <p>Atau login dengan</p>
                        <button type="button" style={ButtonStyle} class="btn btn-primary text-center">Facebook</button>
                        <br />
                        <br />
                        <button type="button" style={ButtonStyle} class="btn btn-danger text-center">Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPenjual