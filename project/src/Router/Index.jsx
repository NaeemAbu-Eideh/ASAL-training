import React from "react";
import * as Router from 'react-router-dom';
import Header from "../Components/Header/Index";
import Menu from "../Components/Menu/Index";
import Body from "../Components/Index";
import fetchData from '../Config/FetchingData';

class Ecom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            smartphone:this.props.smartphone,
            camera:this.props.camera,
            audio:this.props.audio,
            cart:this.props.cart,
            target:this.props.target
        }
    }

    async componentDidMount() {
        try {
            const fetchedData = await fetchData();
            this.setState({
                smartphone: fetchedData.smartphone,
                audio: fetchedData.audio,
                camera: fetchedData.camera,
            });
            console.log('state in home page:', this.state);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render(){
        const {smartphone,camera,audio,cart,target} = this.state;
        return(
        <>
        <Router.BrowserRouter>
            <Header/>
            <Menu/>
            <Body
            smartphone={smartphone}
            audio={audio}
            camera={camera}
            cart={cart}
            target={target}
            />
        </Router.BrowserRouter>
        </>
        );
    }
}

export default Ecom;