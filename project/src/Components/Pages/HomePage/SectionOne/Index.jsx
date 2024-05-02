import React from "react";
import './SectionOne.css';
import { AddProduct } from "../../../CommonComponents";


class SectionOne extends React.Component{

    render(){
        return(
        <div className="phoneSectionStage">
            <div className="phoneSection">
                <p className="smartphoneAndTablets">Smartphone & Tablets</p>
                <div className="phoneSectionHr">
                    <hr className="phoneSectionHrRed"/>
                    <hr className="phoneSectionHrGray"/>
                </div>
                <div className="phones">
                    <AddProduct
                    productSection="phoneProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="phoneImage"
                    productInfoClassName="phoneInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="phonePriceStyle"
                    display=""
                    />
                    <AddProduct
                    productSection="phoneProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="phoneImage"
                    productInfoClassName="phoneInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="phonePriceStyle"
                    display=""
                    />
                    <AddProduct
                    productSection="phoneProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="phoneImage"
                    productInfoClassName="phoneInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="phonePriceStyle"
                    display=""
                    />
                    <AddProduct
                    productSection="phoneProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="phoneImage"
                    productInfoClassName="phoneInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="phonePriceStyle"
                    display=""
                    />
                    <AddProduct
                    productSection="phoneProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="phoneImage"
                    productInfoClassName="phoneInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="phonePriceStyle"
                    display=""
                    />
                    <AddProduct
                    productSection="phoneProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="lastPhone"
                    productInfoClassName="phoneInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="phonePriceStyle"
                    display=""
                    />
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

export default SectionOne;