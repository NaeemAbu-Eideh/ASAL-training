import React from "react";
import "./Cart.css";

import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiArrowsClockwiseBold } from "react-icons/pi";


class Cart extends React.Component{
    render(){
        return(
        <div className="cart">
        <div>
            <input type="text" value={1} className="numberOfProducts"></input>
            <FaMinus className="increaseDecreaseIcons"/>
            <GoPlus className="increaseDecreaseIcons"/>
            <button className="likeAndReset">{<FaRegHeart className="likeAndResetIcons"/>}</button>
            <button className="likeAndReset">{<PiArrowsClockwiseBold className="likeAndResetIcons" />}</button>
        </div>
        <div>
            <button className="addCart">ADD TO CART</button>
        </div>
        <div className="buyInformation">
            <p className="buyInfoText">Asus TUF FX504GE-E4059T is availaple to buy in increments of 1</p>
            <br/>
            <p className="buyInfoText"> SKU: FX504GE</p>
        </div>
        </div>
        );
    }
}

export default Cart;