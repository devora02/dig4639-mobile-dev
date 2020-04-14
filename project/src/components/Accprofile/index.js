import React from "react";
import "./index.css"


function Accprofile(props) {
    return (
        <div className="profile">
                <div className="card">
                    <div className="cardContent">
                        <p className="cardHeader">{props.profile.name}</p>
                        <p className="cardPara">{props.profile.count}</p>
                    </div>
                </div>
        </div>
    )
};

export default Accprofile;