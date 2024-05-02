import React from "react";
import './Images.css';

import image1 from "../../../../Images/Asus TUF FX504GE/image1.png";
import image2 from "../../../../Images/Asus TUF FX504GE/image2.png";
import image3 from "../../../../Images/Asus TUF FX504GE/image3.png";
import image4 from "../../../../Images/Asus TUF FX504GE/image4.png";


class Images extends React.Component{
    render(){
        return(
            <div>
                <img className="imagesBarOff" id="image1" src={image2} alt="image1"></img>
                <img className="imagesBarOff" id="image2" src={image3} alt="image2"></img>
                <img className="imagesBarOff" id="image3" src={image4} alt="image3"></img>
                <img className="imagesBarOn" id="image4" src={image1} alt="image4"></img>
            </div>
        );
    }
}

export default Images;