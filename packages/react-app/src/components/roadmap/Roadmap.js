
import './Roadmap.css';
import React from "react";

import RoadmapIMG from "../../images/Robo Roadmap.png";

function Roadmap() {
    return(
        <div className="Roadmap" id="Roadmap">
            <img className="RoadmapIMG" src={RoadmapIMG} alt="loglogo" />
        </div>
    )
}

export default Roadmap;