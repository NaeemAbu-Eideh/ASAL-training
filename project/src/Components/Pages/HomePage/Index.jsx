import React from 'react';

import SectionOne from './SectionOne/Index.jsx';
import SectionTwo from './SectionTwo/Index.jsx';
import SectionThree from './SectionThree/Index.jsx';
import BrandsBar from './BrandsBar/Index.jsx';
import SaveMoneyBar from './SaveMoneyBar/Index.jsx';


class HomePage extends React.Component{
    
    render(){

        return(
            <>
            <SectionOne/>
            <SectionTwo/>
            <SaveMoneyBar/>
            <SectionThree/>
            <BrandsBar/>
            </>
        );
    }
}

export default HomePage;