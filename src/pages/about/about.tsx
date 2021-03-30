import React from "react";
import "./about.css"
import wouterSnowPic from "./../../images/wouter.jpg"

export default function About() {
    return (
        <div className="about-container bg-dark-grey section-wrapper">
            <h1 className="section-title">About</h1>
            <div className="about-flex-container">
                <div className="about-info">
                    Life story: 
                    Born and raised in the country side of Belgium. This also the place I lived to longest time of my life. 
                    I took a bachelors in ICT in Geel Belgium and during my bachelors I studied in Sweden and did an internship in Beijing China. 

                    Hobbies and interests:

                    Currently I'm living together with my girlfriend Mathilda in a small apartment in the center of Göteborg.


                </div> 
                <div className="about-pic">
                    <img src={wouterSnowPic} alt="BigCo Inc. logo"/>
                </div>
            </div>
        </div>
    );
}