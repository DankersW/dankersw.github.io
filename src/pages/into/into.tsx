import React from "react";
import "./into.css"
import ScrolDown from "./../../components/scrol/scrolDown"


export default function IntoPage() {
    return (
        <div className="container bg-grey">
            <span/>
            <div className="flexitem-text">
                <h1 className="into-name">Hi, I'm Wouter Dankers</h1>
                <h3 className="into-title">A software engineer</h3>
            </div>
            <div className="flexitem-scroll-down">
                <ScrolDown/>
            </div>
        </div>
    );
}
