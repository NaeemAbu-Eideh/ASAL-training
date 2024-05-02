import React from "react";
import * as Routers from "react-router-dom";
import './Routers.css';
import Links from "./Links/Index";
import HomePage from "../../Pages/HomePage/Index";
import AddCart from "../../Pages/AddCart/Index";
import ProductPage from "../../Pages/ProductPage/Index";

class HeaderLinks extends React.Component{
    render(){
        return(
            <div className="headerRoutersDiv">
                <Routers.BrowserRouter>
                <Routers.Routes>
                    <Routers.Route path="/" element={<Links/>}>
                        <Routers.Route path="/Index.jsx" element={<HomePage/>}></Routers.Route>
                        <Routers.Route path="/Index.jsx" element={<AddCart/>}></Routers.Route>
                    </Routers.Route>
                </Routers.Routes>
                </Routers.BrowserRouter>
            </div>   
        );
    }
}

export default HeaderLinks;