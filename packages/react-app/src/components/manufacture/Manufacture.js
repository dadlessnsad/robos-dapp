import './Manufacture.css';
import React from "react";

import RoboTwo from "../../images/GenesisRobos/5.png";
import RoboOne from "../../images/GenesisRobos/7.png";

function Manufacture() {
    return (
        <div className="Manufacture" id="Manufacture">
            <div className="ManufactureBox">
                <button className="ManufactureBtn">Your Robos</button>
            </div>
            {/* <div className="ManufactureCtn">
                <div className="ManufactureBox1">
                    <h1>Robo 1</h1>
                    <img className="UserRobo" src={RoboOne} alt="robo" />
                </div>
                <div className="BtnCTN">
                    <button className="ManufactureBtn">Manufacture</button>
                </div>
                <div className="ManufactureBox2">
                    <h1>Robo 2</h1>
                    <img className="UserRobo" src={RoboTwo} alt="robo" />
                </div>
            </div>
             */}
        </div>
        
    )
}

export default Manufacture;