import React from 'react';
import './ProductPage.css';
import Images from './Images/Index.jsx';
import MainImage from './MainImage/Index.jsx';
import ProductInformation from './ProductInformation/Index.jsx';
import Cart from './Cart/index.jsx';
import ExtraInformation from './ExtraInformation/index.jsx';



class ProductPage extends React.Component{
    
    

    render(){

        return(
            <table className='productInformationPage'>
                <tr className='productTableSections'>
                    <td rowSpan={2} className='productTableSections' id='firstImageSection'><Images/></td>
                    <td rowSpan={2} className='productTableSections' id='secondImageSection'><MainImage/></td>
                    <td className='productTableSections' id='thirdImageSection'><ProductInformation/></td>
                </tr>
                <tr className='productTableSections'>
                    <td className='productTableSections' id='fourthImageSection'><Cart/></td>
                </tr>
                <tr className='productTableSections'>
                    <td className='productTableSections' colSpan={3} id='fifthImageSection'><ExtraInformation/></td>
                </tr>
            </table>
        );
    }
}

export default ProductPage;