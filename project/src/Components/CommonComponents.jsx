import React from "react";


export function AddProduct(props){
    return(
    <div className={props.productSection}>
        <span className={props.spanClassName}><img src={props.image} alt='image' className={props.imageClassName}></img></span>
        <div className={props.productInfoClassName} style={{display:props.display}}>
            <p className={props.productInfo}>{props.name}</p>
            <p className={props.productInfo}><spand className={props.priceSpan}>{props.price}</spand></p>
        </div>
    </div>
    );
}

export function AddBrands(props){
    return(
        <span className={props.brandId}><img src = {props.image} alt={props.name} className="allBrands" onClick={props.onClick}></img></span>
    );        
}

