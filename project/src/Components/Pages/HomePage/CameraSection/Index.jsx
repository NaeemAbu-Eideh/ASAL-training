import React from 'react';
import './CameraSection.css';
import  AddProduct from '../../../CommonComponents';
import * as Router from 'react-router-dom';



class CameraSection extends React.Component{

    handleProductClick = (camera) => {
        // SetTargetProduct(camera);
        
    }

    render(){
        const {camera} = this.props;
        // SetTargetProduct = setTargetProduct;
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
                            <Router.Link to="/product" key={cameras.id}>
                                <AddProduct
                                // key={cameras.id}
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
                                camera={camera}
                                onClick={()=>this.handleProductClick(cameras)}
                                />
                            </Router.Link>
                        ))}
                        <Router.Outlet/>
                            
                        </div>
                    </div>
                </div>
                );
        
    }
}

export default CameraSection;