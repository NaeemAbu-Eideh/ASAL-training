import React from "react";
import './Images.css';

class Images extends React.Component{
    render(){
        // const {targetProduct} = this.props;
        return(
                <img className="imagesBar" src={"targetProduct.image"} alt={"targetProduct.name"}></img>           
        );
    }
}

export default Images;