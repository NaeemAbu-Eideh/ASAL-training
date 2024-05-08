import React from "react";
import './AudioSection.css';
import { AddProduct } from "../../../CommonComponents";
import bluetooth from '../../../../Images/Bluetooth speaker.png';



class AudioSection extends React.Component{

    render(){
        const {audio} = this.props;
        return(
            <div className="audioSectionStage">
                <div className="audioSection">
                <p className="audioAndSound">Audio & Sound</p>
                <div className="audioSectionHr">
                    <hr className="audioSectionHrRed"/>
                    <hr className="audioSectionHrGray"/>
                </div>
                <div className="audio">
                    {audio.map((audioItem) => (
                        <AddProduct
                        key={audioItem.id}
                        productSection="audioProductSection"
                        spanClassName=""
                        image={audioItem.image}
                        imageClassName="audioImage"
                        productInfoClassName="audioInfoDiv"
                        productInfo=""
                        name={audioItem.name}
                        price={audioItem.price}
                        priceSpan="audioPriceStyle"
                        display=""
                        />
                
                    ))}
                </div>
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

export default AudioSection;