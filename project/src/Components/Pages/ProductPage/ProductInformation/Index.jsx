import React from "react";
import './ProductInformation.css';
import Cart from "../Cart";


class ProductInformation extends React.Component{
    render(){
        // const {targetProduct, headerCounter, setHeaderCounter, numberOfProducts, setNumberOfProducts} = this.props;
        return(
            <>
            <div className="productInformation">
                <pre className="productBath">Home  /  {'targetProduct.name'}</pre>
                <h1 className="productTitle">{'targetProduct.name'}</h1>
                <h3 className="productPrice">${'targetProduct.price'}</h3>
                <p className="productMoreInformation">
                    {'targetProduct.details'}
                    </p>
                    <Cart
                        // headerCounter={headerCounter}
                        // setHeaderCounter={setHeaderCounter}
                        // name={targetProduct.name}
                        // numberOfProducts={numberOfProducts}
                        // setNumberOfProducts={setNumberOfProducts}
                        // targetProduct={targetProduct}
                        />
            </div>
            </>
        );
    }
}

export default ProductInformation;