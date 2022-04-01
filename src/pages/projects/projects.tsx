import React from "react";
import "./projects.css"
import {projectData} from "./projectData"

export default function Projects() {
    return (
        <div className="projects-container section-wrapper bg-dark-grey">
            <h1 className="section-title">Projects</h1>
            <h3 className="sub-sub-title">
                A selection of some of my pet projects. All source code is publically availible on <a href="https://github.com/DankersW" target="_blank" rel="noopener noreferrer">Github</a>.

            </h3>
            <h4 className="sub-sub-sub-title"> 
                For my work projects please consult my <a href="https://github.com/DankersW" target="_blank" rel="noopener noreferrer">CV</a> or <a href="https://github.com/DankersW" target="_blank" rel="noopener noreferrer">portfolio.</a>.
            </h4>
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