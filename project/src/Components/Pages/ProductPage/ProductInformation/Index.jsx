import React from "react";
import './ProductInformation.css';

import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";


class ProductInformation extends React.Component{
    render(){
        return(
            <>
            <div className="buttons">
                <button className="arrowLeftRight"><FaAngleLeft className="leftRight"/></button>
                <button className="arrowLeftRight"><FaAngleRight className="leftRight" /></button>
            </div>
            <div className="productInformation">
                <pre className="productBath">Home  /  Asus TUF FX504GE-E4059T</pre>
                <h1 className="productTitle">Asus TUF FX504GE-E4059T</h1>
                <h3 className="productPrice">$399.00</h3>
                <p className="productMoreInformation">
                    8th Generation Intel Core 15-8300H processor (up to 3.9GHz) and GeForce GTX 1050 for 
                    superior gaming performance and multitasking

                    Portable design with 0.98" thin profile and weight of only 5.07 lbs

                    Desktop-style red-backlit keyboard with 1.8mm key travel distance and rated for 20-million 
                    keystroke durability

                    1TB FireCuda Solid State Hybrid Drive, up to 5x faster than traditional HDD
                    </p>

            </div>
            </>
        );
    }
}

export default ProductInformation;