import React from "react";
import './TopFooter.css';


import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoWifiOutline } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";


class TopFooter extends React.Component{

    render(){
        return(
            // <div className="footer">
            //     <div className="footerTopInfo" id="offceAddress">
            //         <p className="grayTitles">Our Office Address</p>
            //         <p className="whiteParagraphs">169 Florida Ave, L.A City</p>
            //     </div>
            //     <div className="footerTopInfo" id="phoneNumber">
            //         <p className="grayTitles">Please call Us:</p>
            //         <p className="whiteParagraphs">(+84) 1234 686 9669</p>
            //     </div>
            //     <div className="footerTopIcons">
            //         <FaFacebookF className="topIcons"/>
            //         <IoLogoTwitter className="topIcons"/>
            //         <FaPinterest className="topIcons"/>
            //         <FaGooglePlusG className="topIcons"/>
            //         <FaInstagram className="topIcons"/>
            //         <IoWifiOutline className="topIcons"/>
            //     </div>
            // </div>
            <div className="topFooter">
                <div className="topFooterInfo" id="offceAddress">
                    <p className="grayTitles">Our Office Address</p>
                    <p className="whiteParagraphs">169 Florida Ave, L.A City</p>
                </div>
            </div>
        );
    }
}

export default TopFooter;