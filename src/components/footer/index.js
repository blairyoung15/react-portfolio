import React from 'react';
import github from "../../assets/small/icons8-github.gif";
import linkedin from "../../assets/small/icons8-linkedin-circled.gif";
import twitter from "../../assets/small/icons8-twitter-circled.gif"


function Footer() {
    return (
        <div className="flex-row" id="footer">
            <div className='img-link'>
                <a href="https://github.com/blairyoung15"><img src={github} alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/blair-young92/"><img src={linkedin} alt="LinkedIn" className="icon"/></a>
                <a href="https://twitter.com"><img src={twitter} alt="Twitter" className="icon"/></a>
            </div>
         
        </div>
    )
}

export default Footer;