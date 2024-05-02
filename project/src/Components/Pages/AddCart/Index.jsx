import React from 'react';
import './AddCart.css';
import ProductTitels from './ProductTitles/Index';
import ProductInformationPlace from './ProsuctInformationPlace/Index';
import ProductSummery from './ProductSummery/Index';




class AddCart extends React.Component{
    
    

    render(){
        return(
            <table className='cartInformations'>
                <tr className='cartInformationPlace'>
                    <td colSpan={5} className='cartInformationPlace' id='shoppingCartTitle'><h1>Shopping Cart</h1></td>
                </tr>
                <tr className='cartInformationPlace'>
                    <td colSpan={4} className='cartInformationPlace' id='productTitels'><ProductTitels/></td>
                    <td rowSpan={2} className='cartInformationPlace' id='productList'><ProductSummery/></td>
                </tr>
                <tr className='cartInformationPlace'>
                    <td colSpan={4} className='cartInformationPlace'><ProductInformationPlace/></td>
                </tr>
            </table>
        );
    }
}

export default AddCart;