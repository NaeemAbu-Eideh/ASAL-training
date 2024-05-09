import React from "react";
import './ExtraInformation.css';


class ExtraInformation extends React.Component{
    render(){
        return(
            <div className="extraInformation">
                <div className="extraInformatinTitel">
                    <h4 className="extraInformatinTitelsOn"><span className="underlineOn">DETAILS</span></h4>
                    <h4 className="extraInformatinTitelsOff"><span className="underlineOff">MORE INFORMATION</span></h4>
                    <h4 className="extraInformatinTitelsOff"><span className="underlineOff">REVIEWS</span></h4>
                </div> 
                <hr className="extraInformationHr"/>
               <pre className="extraInformationText">
                <span>8th Generation Intel Core 15-8300H processor (up to 3.9GH2) and GeForce GTX 1050 for superior gaming performance and multitasking</span>
                    <span className="block">Portable design with 0.98" thin profile and weight of only 5.07 lbs</span>
                    <br/>
                    <span className="block">Desktop-style red-backlit keyboard with 1.8mm key travel distance and rated for 20-million keystroke durability</span>
                    <span className="block">1TB FireCuda Solid State Hybrid Drive, up to 5x faster than traditional HDD</span>
                    <br/>
                    <span className="block">8GB DDR4 high-frequency 2666MHz RAM</span>
                    <br/>
                    <span className="block">Gigabit Wave 2 WiFi. Up to 1.73Gbps with 2X2 802.11ac</span>
                </pre>             
            </div>
        );
    }
}

export default ExtraInformation;