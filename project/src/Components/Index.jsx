import React from 'react';
import './Body.css';
import HomePage from "./Pages/HomePage/Index";
import ProductPage from "./Pages/ProductPage/Index"
import AddCart from './Pages/AddCart/Index';
import SubscribeBar from './SubscribeBar/Index';
import Footer from './Footer/Index';
import * as Router from 'react-router-dom';

class Body extends React.Component{
    render(){
        const {smartphone,audio,cart,camera,target} = this.props;
        return(
            <table className='pageBody'>
                <tr className='pageBodySections'>
                    <td className="pageBodySections">
                            <Router.Routes>
                                <Router.Route path='' element={
                                    <HomePage
                                    smartphone={smartphone}
                                    audio={audio}
                                    camera={camera}
                                    target={target}
                                    />
                                }/>
                                <Router.Route path='/product' element={
                                    <ProductPage
                                    smartphone={smartphone}
                                    audio={audio}
                                    camera={camera}
                                    // headerCounters={headerCounters}
                                    // setHeaderCounters={setHeaderCounters}: header
                                    // targetProduct={targetProduct}
                                    target={target}
                                    // numberOfProducts={numberOfProducts} : product
                                    />
                                }/>
                                <Router.Route path='/cart' element={<AddCart/>}/>
                            </Router.Routes>
                    </td>
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