import React from "react";
import './SmartphoneSection.css';
import AddProduct from "../../../CommonComponents";
import { Link, Outlet } from "react-router-dom";



class SmartphoneSection extends React.Component {
    constructor(props){
        super(props);
        this.state={
            target:this.props.target
        };
        this.handleProductClick = this.handleProductClick.bind(this);
    }
    handleProductClick = (phone) => {
        console.log(phone);
        

    }

    render() {
        const { smartphone} = this.props;
        const {target}=this.state;
        return (
            <div className="phoneSectionStage">
                <div className="phoneSection">
                    <p className="smartphoneAndTablets">Smartphone & Tablets</p>
                    <div className="phoneSectionHr">
                        <hr className="phoneSectionHrRed" />
                        <hr className="phoneSectionHrGray" />
                    </div>
                    <div className="phones">
                        {smartphone.map((phone) => (
                            <Link to="/product" key={phone.id}>
                                <AddProduct
                                    productSection="phoneProductSection"
                                    spanClassName=""
                                    image={phone.image}
                                    imageClassName="phoneImage"
                                    productInfoClassName="phoneInfoDiv"
                                    productInfo=""
                                    name={phone.name}
                                    price={phone.price}
                                    priceSpan="phonePriceStyle"
                                    display=""
                                    onClick={() => this.handleProductClick(phone)}
                                />
                            </Link>
                        ))}
                    </div>
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default SmartphoneSection;
