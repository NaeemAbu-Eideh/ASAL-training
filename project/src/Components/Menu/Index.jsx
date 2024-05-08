import React from "react";
import * as Routers from 'react-router-dom';
import './Menu.css';
import MenuLinks from "./Routers/Index";


class Menu extends React.Component{
    render(){
        return(
            <div className="menuDiv">
                <Routers.BrowserRouter>
                    <Routers.Routes>
                        <Routers.Route path="/" element={<MenuLinks/>}>
                            <Routers.Route path="" element=""></Routers.Route>
                        </Routers.Route>
                    </Routers.Routes>
                </Routers.BrowserRouter>
            </div>
        );
    }
}

export default Menu;