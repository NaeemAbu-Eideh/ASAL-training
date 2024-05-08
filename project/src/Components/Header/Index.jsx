import React from "react";
import './Header.css';
import HeaderLinks from "./Routers/Index";

class Header extends React.Component{
    render(){
        return(
            <div className="headerDiv">
                <h1 className="camaro">CAMARO</h1>
                <HeaderLinks/>
                <div className="yourTotalCart">
                    <p className="yourTotalCartText">Your Cart</p>
                    <p className="yourTotalCartValue">$0.00</p>
                </div>
            </div>
        );
    }
}

export default Header;