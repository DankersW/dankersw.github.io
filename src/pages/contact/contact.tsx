import React from "react";
import "./contact.css"
import {contactData} from "./contactData"
import {IconContext} from "react-icons"

export default function Contact() {
    return (
        <div className="contact-container section-wrapper bg-dark-grey">
            <h1 className="section-title">Connect</h1>
            <h2 className="sub-title">Let's become E-BFFs</h2>
            <div className="icon-container">
                <IconContext.Provider value={{color: '#ECECEC', size: '5rem'}}>
                    {contactData.map((item, index) => {
                        return (
                            <div className="contact-flex-item" key={index}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.icon}
                                </a>
                            </div>
                        )
                    })}
                </IconContext.Provider>
            </div>
        </div>
    );
}