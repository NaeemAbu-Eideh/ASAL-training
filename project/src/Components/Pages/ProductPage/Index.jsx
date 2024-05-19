import React from 'react';
import './ProductPage.css';
import Images from './Images/Index.jsx';
import MainImage from './MainImage/Index.jsx';
import ProductInformation from './ProductInformation/Index.jsx';
import ExtraInformation from './ExtraInformation/index.jsx';
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";



class ProductPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            target:this.props.target,
            smartphone:this.props.smartphone,
            audio:this.props.audio,
            camera:this.props.camera
        };
        console.log('state in product page:', this.state);
    }
    render(){

        const {smartphone, audio, camera,target} = this.state;
        return(
            <table className='productInformationPage'>
                <tr className='productTableSections'>
                    <td className='productTableSections'>
                        <Images
                        // targetProduct={targetProduct}
                        />
                        <MainImage
                        // targetProduct={targetProduct}
                        />
                        <ProductInformation
                        // headerCounters={headerCounters}
                        // setHeaderCounters={setHeaderCounters}
                        // targetProduct={targetProduct}
                        // numberOfProducts={numberOfProducts}
                        // setNumberOfProducts={setNumberOfProducts}
                        />
                        <div className="buttons">
                        <button className="arrowLeftRight"><FaAngleLeft className="leftRight"/></button>
                        <button className="arrowLeftRight"><FaAngleRight className="leftRight" /></button>
                        </div>
                        <ExtraInformation
                        // targetProduct={targetProduct}
                        />
                    </td>
                </tr>
            </table>
        );
    }
}

export default ProductPage;