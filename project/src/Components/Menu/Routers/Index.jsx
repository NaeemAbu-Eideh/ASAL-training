import React from "react";
import * as Routers from 'react-router-dom';
import './Routers.css';




class MenuLinks extends React.Component{
    render(){
        return(
            <div className="menuLinksDiv">
                <Routers.Link className="menuRoutresLinks" to="">HOME</Routers.Link>
                <Routers.Link className="menuRoutresLinks" to="">SHOP</Routers.Link>
                <Routers.Link className="menuRoutresLinks" to="">PAGES</Routers.Link>
                <Routers.Link className="menuRoutresLinks" to="">LOOKBOOK</Routers.Link>
                <Routers.Link className="menuRoutresLinks" to="">BRANDS</Routers.Link>
                <Routers.Outlet/>
            </div>
        );
    }
}

export default MenuLinks;