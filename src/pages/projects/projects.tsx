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
            <h4 className="hover-tip sub-sub-sub-title">
                (Hover over the tiles for more info)
            </h4>
            <div className="project-grid">
                {projectData.map((item, index) => {
                    return (
                        <div className={item.bgPic + ' card'}>
                            <div className="card-content">
                                <h2 className="card-title">{item.title}</h2>
                                <p className="card-body">{item.description}</p>
                                <a href={item.link}  className="button">Learn More</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
