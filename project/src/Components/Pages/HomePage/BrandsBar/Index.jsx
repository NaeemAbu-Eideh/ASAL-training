import React from 'react';
import './BrandBar.css';
import { AddBrands } from '../../../CommonComponents';

import yody from '../../../../Images/yody.png';
import startupSocks from '../../../../Images/startup socks.png';
import swachhBharat from '../../../../Images/swachh bharat.png';
import swatch from '../../../../Images/swatch.png';
import garden from '../../../../Images/garden.png';
import toshiba from '../../../../Images/toshiba.png';

class BrandsBar extends React.Component{
    
    render(){
        return(
            <div className='brandsStage'>
                <div className='brandsSection'>
                    <AddBrands 
                    brandId = "brandsgroup1"
                    image={startupSocks}
                    name="brand"
                    onClick=""
                    />
                    <AddBrands 
                    brandId = "swachhBharat"
                    image={swachhBharat}
                    name="brand"
                    onClick=""
                    />
                    <AddBrands 
                    brandId = "brandsgroup2"
                    image={swatch}
                    name="brand"
                    onClick=""
                    />
                    <AddBrands 
                    brandId = "brandsgroup1"
                    image={garden}
                    name="brand"
                    onClick=""
                    />
                    <AddBrands 
                    brandId = "brandsgroup2"
                    image={toshiba}
                    name="brand"
                    onClick=""
                    />
                    <AddBrands 
                    brandId = "brandsgroup1"
                    image={yody}
                    name="brand"
                    onClick=""
                    />
                </div>
            </div>
        );
    }
}

export default BrandsBar;