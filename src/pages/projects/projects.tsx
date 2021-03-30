import React from "react";
import "./projects.css"

export default function Projects() {
    return (
        <div className="projects-container section-wrapper bg-grey">
            <h1 className="section-title">Projects</h1>
            <h3 className="sub-sub-title">
                A selection of some of my personal projects. All source code can be found on <a href="https://github.com/DankersW" target="_blank" rel="noopener noreferrer">Github</a>
            </h3>
            <div className="project-grid">
                <div className="project-tile bg-home-automation">
                    <div className="project-info">
                        <h3 className="project-title">Home automation</h3>
                        <p>Some long text here</p>
                        <p>Tools</p>
                        <p>link</p>
                    </div>
                    <div className="project-bg">
                        pic
                    </div>  
                </div>

                <div className="project-tile">Portfolio website</div>
                <div className="project-tile">Snow plow robot</div>
                <div className="project-tile">IEEE publicaion</div>
                <div className="project-tile">AI poker player</div>
                <div className="project-tile">DIY bed with storage</div>
                <div className="project-tile">Drone</div>

            </div>

        </div>
    );
}