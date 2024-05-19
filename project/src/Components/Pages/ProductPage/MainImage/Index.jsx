import React from "react";
import './MainImage.css';

class MainImage extends React.Component{
    render(){
        // const {targetProduct} = this.props;
        return(
            <img className="mainImage" src={'targetProduct.image'} alt={'targetProduct.name'}></img>
        );
    }
}

export default MainImage;