import React from "react";
import './MainImage.css';

import image1 from "../../../../Images/Asus TUF FX504GE/image1.png";
import image2 from "../../../../Images/Asus TUF FX504GE/image2.png";
import image3 from "../../../../Images/Asus TUF FX504GE/image3.png";
import image4 from "../../../../Images/Asus TUF FX504GE/image4.png";

class MainImage extends React.Component{
    render(){
        return(
        <div className="mainImgageFrame">
            <img id="mainImage" src={image1} alt="image4"></img>
        </div>
        );
    }
}

export default MainImage;