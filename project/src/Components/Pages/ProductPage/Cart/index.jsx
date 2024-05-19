import React from "react";
import "./Cart.css";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiArrowsClockwiseBold } from "react-icons/pi";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            liked: false
        };
        
    }

    handleIncrease = () => {
        this.props.setNumberOfProducts(this.props.numberOfProducts + 1);
    };

    handleDecrease = () => {
        if (this.props.numberOfProducts > 1) {
            this.props.setNumberOfProducts(this.props.numberOfProducts - 1);
        }
    };

    handleAddCart = () => {
        // const { numberOfProducts, targetProduct, headerCounter, setHeaderCounter } = this.props;
        // const totalPrice = numberOfProducts * targetProduct.price;
        // const newCount = {
        //     yourCart: (headerCounter.yourCart || 0) + numberOfProducts,
        //     like: headerCounter.like || 0,
        //     yourCartTotalPrice: (headerCounter.yourCartTotalPrice || 0) + totalPrice
        // };

        // setHeaderCounter(newCount);
    };

    handleLike = () => {
        this.setState(prevState => ({ liked: !prevState.liked }));
        // console.log(this.props.headerCounter);
        
        if(this.state.liked === false){
            console.log(this.props.headerCounter.like);
            let cart = {
                like:this.props.headerCounter.like+1,
                yourCart:this.props.headerCounter.yourCart,
                yourCartTotalPrice:this.props.headerCounter.yourCartTotalPrice
            };
            this.props.setHeaderCounter(cart);
            console.log(cart);
            this.props.headerCounter.like = 10;
        //     this.props.setHeaderCounter({
        //         like: this.props.headerCounter.like+1,
        //         yourCart:this.props.headerCounter.yourCart,
        //         yourCartTotalPrice:this.props.headerCounter.yourCartTotalPrice,
        //     });
        //     console.log(this.props.headerCounter);
        }
        else{
        //     this.props.setHeaderCounter({
        //         like: this.props.headerCounter.like >0? this.props.headerCounter.like-1: 0,
        //         yourCart:this.props.headerCounter.yourCart,
        //         yourCartTotalPrice:this.props.headerCounter.yourCartTotalPrice,
        //     });
        //     console.log(this.props.headerCounter);
        }
    };

    handleReset = () => {
        this.props.setNumberOfProducts(1);
    };

    render() {
        const { name, numberOfProducts } = this.props;
        const { liked } = this.state;

        return (
            <div className="cart">
                <div>
                    <input type="text" value={numberOfProducts} className="numberOfProducts" readOnly />
                    <FaMinus className="increaseDecreaseIcons" onClick={this.handleDecrease} />
                    <GoPlus className="increaseDecreaseIcons" onClick={this.handleIncrease} />
                    <button className="like" onClick={this.handleLike}>
                        {liked ? <FaHeart className="likeAndResetIcons" style={{ color: "#D32F2F" }} /> : <FaRegHeart className="likeAndResetIcons" />}
                    </button>
                    <button className="reset" onClick={this.handleReset}>
                        <PiArrowsClockwiseBold className="likeAndResetIcons" />
                    </button>
                </div>
                <div>
                    <button className="addCart" onClick={this.handleAddCart}>ADD TO CART</button>
                </div>
                <div className="buyInformation">
                    <p className="buyInfoText">{name}</p>
                </div>
            </div>
        );
    }
}

Cart.defaultProps = {
    headerCounter: { yourCart: 0, like: 0, yourCartTotalPrice: 0 },
    setHeaderCounter: () => {},
    numberOfProducts: 1,
    setNumberOfProducts: () => {},
    targetProduct: { price: 0 }
};

export default Cart;
