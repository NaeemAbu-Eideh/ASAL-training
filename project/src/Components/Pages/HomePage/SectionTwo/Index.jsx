import React from "react";
import './SectionTwo.css';
import { AddProduct } from "../../../CommonComponents";
import bluetooth from '../../../../Images/Bluetooth speaker.png';



class SectionTwo extends React.Component{

    render(){
        return(
            <div className="audioSectionStage">
                <div className="audioSection">
                <p className="audioAndSound">Audio & Sound</p>
                <div className="audioSectionHr">
                    <hr className="audioSectionHrRed"/>
                    <hr className="audioSectionHrGray"/>
                </div>
                <div className="audio">
                    <AddProduct
                    productSection="audioProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="audioImage"
                    productInfoClassName="audioInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="audioPriceStyle"
                    display=""
                    />
                    <AddProduct
                    productSection="audioProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="audioImage"
                    productInfoClassName="audioInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="audioPriceStyle"
                    display=""
                    />
                    <AddProduct
                    productSection="audioProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="audioImage"
                    productInfoClassName="audioInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="audioPriceStyle"
                    display=""
                    />
                    <AddProduct
                    productSection="audioProductSection"
                    spanClassName=""
                    image=""
                    imageClassName="lastAudio"
                    productInfoClassName="audioInfoDiv"
                    productInfo=""
                    name="naeemnaeemnaeemnawem"
                    price="0000"
                    priceSpan="audioPriceStyle"
                    display=""
                    />
                    <AddProduct
                    productSection="audioProductBluetooth"
                    spanClassName=""
                    image={bluetooth}
                    imageClassName="bluetooth"
                    productInfoClassName="audioInfoDiv"
                    productInfo=""
                    name=""
                    price=""
                    priceSpan=""
                    display="none"
                    />
                </div>
                <div className="audioSectionParts">
                    <div className="audioSectionPartOn"></div>
                    <div className="audioSectionPartsOff"></div>
                    <div className="audioSectionPartsOff"></div>
                </div>
                </div>
            </div>
        );
    }
}

export default SectionTwo;