import React from 'react';
import './Body.css';

import HomePage from "./Pages/HomePage/Index";
import ProductPage from "./Pages/ProductPage/Index"
import AddCart from './Pages/AddCart/Index';
import SubscribeBar from './SubscribeBar/Index';
import Footer from './Footer/Index';


class Body extends React.Component{
    
    

    render(){
        return(
            <table className='pageBody'>
                <tr className='pageBodySections'>
                    <td className="pageBodySections"><HomePage/></td>
                </tr>
                <tr className='pageBodySections'>
                    <td className="pageBodySections"><SubscribeBar/></td>
                </tr>
                <tr className='pageBodySections'>
                    <td className="pageBodySections"><Footer/></td>
                </tr>
            </table>
        );
    }
}

export default Body;