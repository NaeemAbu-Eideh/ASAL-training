import React from "react";
import './Header.css';
import Links from "../../Router/HeaderLinks/Index";
class Header extends React.Component{
    render(){
        return(
            <div className="headerDiv">
                <h1 className="camaro">CAMARO</h1>
                <Links/>
            </div>
        );
    }
}

export default Header;