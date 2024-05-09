import React from 'react';

import SmartphoneSection from './SmartphoneSection/Index.jsx';
import AudioSection from './AudioSection/Index.jsx';
import CameraSection from './CameraSection/Index.jsx';
import BrandsBar from './BrandsBar/Index.jsx';
import SaveMoneyBar from './SaveMoneyBar/Index.jsx';


class HomePage extends React.Component{
    
    render(){
        const {smartphone, audio, camera} = this.props;
        return(
            <>
            <SmartphoneSection smartphone={smartphone}/>
            <AudioSection audio={audio}/>
            <SaveMoneyBar/>
            <CameraSection camera={camera}/>
            <BrandsBar/>
            </>
        );
    }
}

export default HomePage;