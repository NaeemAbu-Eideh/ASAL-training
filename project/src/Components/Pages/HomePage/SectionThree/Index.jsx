import React from 'react';
import './SectionThree.css';
import { AddProduct } from '../../../CommonComponents';
import virtualProduct from '../../../../Images/virtual product.png';

class SectionThree extends React.Component{
    render(){
        return(
                <div className="cameraSectionStage">
                    <div className="cameraSection">
                        <p className="cameraAndLens">Camera & lens</p>
                        <div className="cameraSectionHr">
                            <hr className="cameraSectionHrRed"/>
                            <hr className="cameraSectionHrGray"/>
                        </div>
                        <div className="camera">
                            <AddProduct
                            productSection="cameraProductSection"
                            spanClassName=""
                            image=""
                            imageClassName="cameraImage"
                            productInfoClassName="cameraInfoDiv"
                            productInfo=""
                            name="naeemnaeemnaeemnawem"
                            price={<p> $20.00 <del className='oldPrice'>$34.99</del></p>}
                            priceSpan="cameraPriceStyle"
                            display=""
                            />
                            <AddProduct
                            productSection="cameraProductSection"
                            spanClassName=""
                            image=""
                            imageClassName="cameraImage"
                            productInfoClassName="cameraInfoDiv"
                            productInfo=""
                            name="naeemnaeemnaeemnawem"
                            price={<p> $20.00 <del className='oldPrice'>$34.99</del></p>}
                            priceSpan="cameraPriceStyle"
                            display=""
                            />
                            <AddProduct
                            productSection="cameraProductSection"
                            spanClassName=""
                            image=""
                            imageClassName="cameraImage"
                            productInfoClassName="cameraInfoDiv"
                            productInfo=""
                            name="naeemnaeemnaeemnawem"
                            price={<p> $20.00 <del className='oldPrice'>$34.99</del></p>}
                            priceSpan="cameraPriceStyle"
                            display=""
                            />
                            <AddProduct
                            productSection="cameraProductSection"
                            spanClassName=""
                            image=""
                            imageClassName="cameraImage"
                            productInfoClassName="cameraInfoDiv"
                            productInfo=""
                            name="naeemnaeemnaeemnawem"
                            price={<p> $20.00 <del className='oldPrice'>$34.99</del></p>}
                            priceSpan="cameraPriceStyle"
                            display=""
                            />
                            <AddProduct
                            productSection="cameraProductSection"
                            spanClassName=""
                            image=""
                            imageClassName="cameraImage"
                            productInfoClassName="cameraInfoDiv"
                            productInfo=""
                            name="naeemnaeemnaeemnawem"
                            price={<p> $20.00 <del className='oldPrice'>$34.99</del></p>}
                            priceSpan="cameraPriceStyle"
                            display=""
                            />
                            <AddProduct
                            productSection="cameraProductSection"
                            spanClassName=""
                            image=""
                            imageClassName="cameraImage"
                            productInfoClassName="cameraInfoDiv"
                            productInfo=""
                            name="naeemnaeemnaeemnawem"
                            price={<p> $20.00 <del className='oldPrice'>$34.99</del></p>}
                            priceSpan="cameraPriceStyle"
                            display=""
                            />
                        </div>
                    </div>
                </div>
                );
        
    }
}

export default SectionThree;