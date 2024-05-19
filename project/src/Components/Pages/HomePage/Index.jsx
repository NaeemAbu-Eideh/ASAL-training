import React from 'react';
import SmartphoneSection from './SmartphoneSection/Index.jsx';
import AudioSection from './AudioSection/Index.jsx';
import CameraSection from './CameraSection/Index.jsx';
import BrandsBar from './BrandsBar/Index.jsx';
import SaveMoneyBar from './SaveMoneyBar/Index.jsx';
import fetchData from '../../../Config/FetchingData.jsx';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smartphone: this.props.smartphone,
            audio: this.props.audio,
            camera: this.props.camera,
            target:this.props.target
        };
    }

    async componentDidMount() {
        try {
            const fetchedData = await fetchData();
            this.setState({
                smartphone: fetchedData.smartphone,
                audio: fetchedData.audio,
                camera: fetchedData.camera,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        const { smartphone, audio, camera, target } = this.state;
        return (
            <>
                <SmartphoneSection
                    smartphone={smartphone}
                    target={target}
                />
                <AudioSection
                    audio={audio}
                />
                <SaveMoneyBar />
                <CameraSection
                    camera={camera}
                />
                <BrandsBar />
            </>
        );
    }
}

export default HomePage;
