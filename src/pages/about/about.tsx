import React from "react";
import "./about.css"
import wouterSnowPic from "./../../images/wouter.jpg"


export default function About() {
    return (
        <div className="about-container bg-dark-grey section-wrapper">
            <h1 className="section-title">About</h1>
            <div className="about-wrapper">
                <div className="about-text">
                    <p>Born and raised in a small village on the country side of Flanders Belgium called Lichtaart.</p>
                    <p>I Studied a bachelors degree in ICT from the Thomas More Hogeschool Geel Belgium and received a Master of Science degree in Embedded and Inteligent systems from Halmstad University.</p>
                    <p>I take great pride in writing well fuctioning code that scalles and ages well.</p>
                    <p>When I'm not working or writen software for my pet projects, I try to be outside as much as possible. I'm an active outdours person who enjoys many sports and activies, Skiing, ice-hockey, rock-climbing, surfing, etc. just to name a few.</p>
                    <p>Currently Wouter is living together with his girlfriend Mathilda in a cosy apartment in the center of Göteborg.</p>
                </div>
                <div className="pic">
                    <img src={wouterSnowPic} alt="Wouter"/>
                </div>
            </div>            
        </div>
    );
}
