import React from "react";
import "./projects.css"

import bg_1 from "./../../images/project_bg_1.jpg"

export default function Projects() {
    return (
        <div className="projects-container section-wrapper bg-grey">
            <h1 className="section-title">Projects</h1>
            <h3 className="sub-sub-title">
                A selection of some of my personal projects. All source code can be found on <a href="https://github.com/DankersW" target="_blank" rel="noopener noreferrer">Github</a>
            </h3>

            <div className="project-grid">

                <div className="grid-item bg-abstact-1">
                    <h3 className="grid-item-title">Home automation</h3>
                    <div className="grid-item-overlay">
			            <div className="overlay-description">
                            <h3 className="overlay-title">Home automation</h3>
				            <p>A little shiny description</p>
                            <p>Tools: Python, Sketch-up, docker</p>
                            <a href={"https://www.google.com"} target="_blank" rel="noopener noreferrer">
                                Link
                            </a>
                            
			            </div>
		            </div>
                </div>

                <div className="grid-item bg-abstact-2">
                    <h3 className="grid-item-title">DIY bed with storage</h3>
                    <div className="grid-item-overlay">
			            <div className="overlay-description">
                            <h3 className="overlay-title">Home automation</h3>
				            <p>A little shiny description</p>
			            </div>
		            </div>
                </div>

                



                <div className="grid-item bg-abstact-1">Home automation</div>
                <div className="grid-item bg-abstact-1">Portfolio website</div>
                <div className="grid-item bg-abstact-2">Snow plow robot</div>
                <div className="grid-item bg-abstact-3">IEEE publicaion</div>
                <div className="grid-item bg-abstact-4">AI poker player</div>
                <div className="grid-item bg-abstact-5">DIY bed with storage</div>
                <div className="grid-item bg-abstact-6">Drone</div>

            </div>

        </div>
    );
}