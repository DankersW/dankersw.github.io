import React from "react";
import "./contact.css"
import { FaWhatsappSquare, FaFacebook } from 'react-icons/fa';
import { IoMail, IoLogoLinkedin } from 'react-icons/io5';
import { ImGithub } from 'react-icons/im';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillInstagram} from 'react-icons/ai';
import {IconContext} from "react-icons"

export default function Contact() {
    return (
        <div className="contact-container section-wrapper">
            <h1 className="section-title">Connect</h1>
            <h2 className="sub-title">Let's become E-BFFs</h2>
            <div className="icon-container">
                <IconContext.Provider value={{color: '#ECECEC', size: '5rem'}}>

                    <div className="contact-flex-item">
                        <a href="https://github.com/DankersW" target="_blank">
                            <ImGithub/>
                        </a>
                    </div> 

                    <div className="contact-flex-item">
                        <a href="mailto:wouter.dankers@skynet.be?subject=Let%27s%20connect">
                            <IoMail/>
                        </a>
                    </div> 

                    <div className="contact-flex-item">
                        <a href="https://www.linkedin.com/in/wouter-dankers-98162610b/" target="_blank">
                            <IoLogoLinkedin/>
                        </a>
                    </div> 

                    <div className="contact-flex-item">
                        <a href="https://api.whatsapp.com/send?phone=0046720130370&text=Let%27s%20connect" target="_blank">
                            <RiWhatsappFill/>
                        </a>
                    </div> 

                    <div className="contact-flex-item">
                            <FaFacebook/>
                        <a href="https://www.facebook.com/wouter.dankers/" target="_blank">
                        </a>
                    </div> 

                    <div className="contact-flex-item">
                        <a href="https://www.instagram.com/wouterdankers/" target="_blank">
                            <AiFillInstagram/>
                        </a>
                    </div> 


                    

                </IconContext.Provider>
            </div>
        </div>
    );
}