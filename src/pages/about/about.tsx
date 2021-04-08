import React from "react";
import "./about.css"
import wouterSnowPic from "./../../images/wouter.jpg"


export default function About() {
    return (
        <div className="about-container bg-dark-grey section-wrapper">
            <h1 className="section-title">About</h1>
            <div className="about-wrapper">
                <div className="about-text">
                    <p>Born and raised on the country side of Belgium, in a small town called Lichtaart.</p>
                    <p>I studied a bachelors degree in ICT (Iformation and Communication Technology) at the Thomas More Hogeschool Geel, Belgium. During my bachelor studies, I joined the Erasmus program where I did an exchange semester in Sweden. For my internship I went to Beijing China and stayed there for 1 semester. After graduating, I continued studying for a master's degree. I studied and received a MSc. Eng. (Master of Science in Engineering) degree in Embedded and Intelligent Systems from Halmstad University. During my studies I took a specialized track focusing on wireless communication.</p>
                    <p>When I'm not working or thinkering around with one of my pet projects, I try to be outside as much as possible regardless of the weather conditions. I'm an active outdoors person who enjoys many sport activities; skiing, ice-hockey, rock-climbing, trail running, surfing, race cycling, etc. Just to name a few.</p>
                    <p>One of my trades are that I take great pride in written clean and well functioning code that scales and ages well.</p>
                    <p>Currently I'm living in a cosy apartment in the city center of Göteborg Sweden.</p>
                </div>
                <div className="pic">
                    <img src={wouterSnowPic} alt="Wouter"/>
                </div>
            </div>            
        </div>
    );
}
