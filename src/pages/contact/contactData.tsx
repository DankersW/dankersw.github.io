import { FaFacebook, FaStrava } from 'react-icons/fa';
import { IoMail, IoLogoLinkedin } from 'react-icons/io5';
import { ImGithub } from 'react-icons/im';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillInstagram} from 'react-icons/ai';

export const contactData = [
    {
        title: "github",
        url: "https://github.com/DankersW",
        icon: <ImGithub/>
    },
    {
        title: "email",
        url: "mailto:wouter.dankers@skynet.be?subject=Let%27s%20connect",
        icon: <IoMail/>
    },
    {
        title: "linkedin",
        url: "https://www.linkedin.com/in/wouter-dankers-98162610b/",
        icon: <IoLogoLinkedin/>
    },
    {
        title: "whatsapp",
        url: "https://api.whatsapp.com/send?phone=46720130370&text=Let%27s%20connect",
        icon: <RiWhatsappFill/>
    },
    {
        title: "facebook",
        url: "https://www.facebook.com/wouter.dankers/",
        icon: <FaFacebook/>
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/wouterdankers/",
        icon: <AiFillInstagram/>
    },
    {
        title: "strava",
        url: "https://www.strava.com/athletes/44159141",
        icon: <FaStrava/>
    },
]