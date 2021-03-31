import React from "react";
import "./projects.css"
import {projectData} from "./projectData"

export default function Projects() {
    return (
        <div className="projects-container section-wrapper bg-grey">
            <h1 className="section-title">Projects</h1>
            <h3 className="sub-sub-title">
                A selection of some of my personal projects. All source code can be found on <a href="https://github.com/DankersW" target="_blank" rel="noopener noreferrer">Github</a>
            </h3>
            <div className="project-grid">
                {projectData.map((item, index) => {
                    return (
                        <div className={'grid-item ' + item.bgPic} key={'grid_item' + index}>
                            <h3 className="grid-item-title">{item.title}</h3>
                            <div className="grid-item-overlay">
                                <div className="overlay-description">
                                    <h3 className="overlay-title">{item.title}</h3>
				                    <p>{item.description}</p>
                                    <p>Tools: {item.tools}</p>
                                    {item.link !== "" &&
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            More
                                        </a> 
                                    }
                                </div> 
                            </div> 
                        </div>
                    )
                })}
            </div>
        </div>
    );
}