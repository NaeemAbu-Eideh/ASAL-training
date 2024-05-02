import React from "react";
import './Footer.css';
import TopFooter from "./TopFooter/Index";
import MidFooter from "./MidFotter/Index";
import BottomFooter from "./BottomFooter/Index";


class Footer extends React.Component{

    render(){
        return(
            <div className="footer">
                <TopFooter/>
            </div>
        );
    }
}

export default Footer;