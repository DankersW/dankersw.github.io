import React from "react";
import "./about.css"
import wouterSnowPic from "./../../images/wouter.jpg"

export default function About() {
    return (
        <div className="about-container bg-dark-grey section-wrapper">
            <h1 className="section-title">About</h1>
            <div className="about-flex-container">
                <div className="about-info">
                    Born and raised in the country side of Flanders Belgium. He Studied a bachelors degree in ICT from the Thomas More Hogeschool Geel Belgium and received a Master of Science degree in Embedded and Inteligent systems from Halmstad University.

                    Wouter takes great pride in writing well fuctioning code that scalles and ages well. 

                    When Wouter is not working or writen software for his home projects, he tries to be outside as much as possible. Wouter an active outdours person who enjoys many sports and activies, Skiing, ice-hockey, rock-climbing, surfing, etc. just to name a few.
                    

                    Currently Wouter is living together with his girlfriend Mathilda in a cosy apartment in the center of Göteborg.


                </div> 
                <div className="about-pic">
                    <img src={wouterSnowPic} alt="BigCo Inc. logo"/>
                </div>
            </div>
        </div>
    );
}