import React from "react";
import "./about.css"
import wouterSnowPic from "./../../images/wouter.jpg"
import wouterSmile from "./../../images/wouter_smile.jpg"


export default function About() {
    return (
        <div className="about-container bg-dark-grey section-wrapper">
            <h1 className="section-title">About</h1>
            <div className="about-wrapper">
                <div className="about-text">
                    <p>Born and raised on the country side of Belgium, in a small town called <a href="https://goo.gl/maps/7iAzU7YpKzK7SvMR7" target="_blank" rel="noopener noreferrer">Lichtaart</a>.</p>
                    <p>I studied a bachelors degree in ICT (Information and Communication Technology) at the Thomas More Hogeschool Geel, Belgium. During my bachelor studies, I joined a Erasmus program where I did an exchange semester in Sweden. For my internship I went to Beijing China and stayed there for 1 semester. After graduating, I continued studying for a master's degree. I studied and received a MSc. Eng. (Master of Science in Engineering) in Embedded and Intelligent Systems from Halmstad University. During my studies I took a specialized track focusing on wireless communication.</p>
                    <p>When I'm not working or tinkering around with one of my pet projects, I try to be outside as much as possible regardless of the weather conditions. I'm an active outdoors person who enjoys many activities; alpine & backcountry-skiing, ice-hockey, rock-climbing, trail running, surfing, race cycling, etc. Just to name a few.</p>
                    <p>One of my trades are that I take great pride in written clean and well functioning code that scales and ages well.</p>
                    <p>Currently I'm living in a cosy apartment in the city center of Göteborg Sweden.</p>
                </div>
                <div className="pic">
                    imga
                </div>
            </div>

            <div className="grid-container">
                <div className="grid-item"> <img src={wouterSmile} alt="Big smile"/> </div>
                <div className="grid-item grid-item-wide"> 2 </div>
                <div className="grid-item grid-item-wide"> 3 </div>
                <div className="grid-item"> <img src={wouterSnowPic} alt="Snow"/>  </div>
            </div>            
        </div>
    );
}

//  <img src={wouterSnowPic} alt="Wouter"/>