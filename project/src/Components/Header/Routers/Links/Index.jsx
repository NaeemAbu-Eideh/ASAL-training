import React from "react";
import * as Routers from 'react-router-dom';
import './Links.css';

import { PiArrowUDownLeftFill } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";

class Links extends React.Component{
    render(){
        return(
            <>
                <div className="headerLinks">
                    <Routers.Link to="" className="routersLinks"><PiArrowUDownLeftFill className="headerRoutersIcons"/></Routers.Link>
                    <Routers.Link to="" className="routersLinks"><MdFavoriteBorder className="headerRoutersIcons"/></Routers.Link>
                    <Routers.Link to="/AddCart" className="routersLinks"><PiShoppingCart className="headerRoutersIcons"/></Routers.Link>
                    <Routers.Link to="" className="routersLinks"><div className="linksCounterNumbers"><span className="numberOfValues">0</span></div></Routers.Link>
                    <Routers.Link to="" className="routersLinks"><div className="linksCounterNumbers"><span className="numberOfValues">0</span></div></Routers.Link>
                    <Routers.Link to="/AddCart" className="routersLinks"><div className="linksCounterNumbers"><span className="numberOfValues">0</span></div></Routers.Link>
                    </div>
                    <div>
                    <Routers.Link to="/AddCart">
                    <div className="yourTotalCart">
                    <p className="yourTotalCartText">Your Cart</p>
                    <p className="yourTotalCartValue">$0.00</p>
                    </div>
                    </Routers.Link>
                    <Routers.Outlet/>
                    </div>
            </>
        );
    }
}

export default Links;