import React from "react";
import './SmartphoneSection.css';
import { AddProduct } from "../../../CommonComponents";


class SmartphoneSection extends React.Component{

    render(){
        const {smartphone} = this.props;
        console.log(smartphone);
        return(
        <div className="phoneSectionStage">
            <div className="phoneSection">
                <p className="smartphoneAndTablets">Smartphone & Tablets</p>
                <div className="phoneSectionHr">
                    <hr className="phoneSectionHrRed"/>
                    <hr className="phoneSectionHrGray"/>
                </div>
                <div className="phones">
                {smartphone.map((phone) => (
                <AddProduct
                    key={phone.id}
                    productSection="phoneProductSection"
                    spanClassName=""
                    image={phone.image}
                    imageClassName="phoneImage"
                    productInfoClassName="phoneInfoDiv"
                    productInfo=""
                    name={phone.name}
                    price={phone.price}
                    priceSpan="phonePriceStyle"
                    display=""
                />
                ))}
                </div>
                <div className="phoneSectionParts">
                    <div className="phoneSectionPartOn"></div>
                    <div className="phoneSectionPartsOff"></div>
                </div>
            </div>
        </div>
        );
    }
}

export default SmartphoneSection;