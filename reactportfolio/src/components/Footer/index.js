import React from "react";
import '../../App.css'

function Footer(props) {
    return (
        <div className="Footer bg-dark" >
            <ul className=" footerList">
                <li><a href="https://github.com/Sambalogna" className="footerContent">Github</a></li>
                <li><a href="https://www.linkedin.com/in/samuel-lazaro-mandel/" className="footerContent">LinkedIn</a></li>
                <li><a href="https://portfolioofsamuel.herokuapp.com/assets/resume.pdf" className="footerContent">Resume</a></li>
            </ul>
        </div>

    )
}
export default Footer