import React from 'react';
import './CameraSection.css';
import { AddProduct } from '../../../CommonComponents';


class CameraSection extends React.Component{
    render(){
        const {camera} = this.props;
        return(
                <div className="cameraSectionStage">
                    <div className="cameraSection">
                        <p className="cameraAndLens">Camera & lens</p>
                        <div className="cameraSectionHr">
                            <hr className="cameraSectionHrRed"/>
                            <hr className="cameraSectionHrGray"/>
                        </div>
                        <div className="camera">
                        {camera.map((cameras) => (
                            <AddProduct
                            key={cameras.id}
                            productSection="cameraProductSection"
                            spanClassName=""
                            image={cameras.image}
                            imageClassName="cameraImage"
                            productInfoClassName="cameraInfoDiv"
                            productInfo=""
                            name={cameras.name}
                            price={cameras.price}
                            priceSpan="cameraPriceStyle"
                            display=""
                         />
                        ))}
                            
                        </div>
                    </div>
                </div>
                );
        
    }
}

export default CameraSection;