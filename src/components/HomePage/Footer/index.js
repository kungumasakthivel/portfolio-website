import { Component } from "react";
import {Link} from 'react-router-dom'
import './index.css'
import { FaSquareGithub, FaLinkedin, FaSquareInstagram} from "react-icons/fa6";


class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div></div>
                    <div className="icons-container">
                    <a href="https://github.com/kungumasakthivel" rel="noreferrer"  target="_blank" className="icons">
                        <FaSquareGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ksakthivel-k/" rel="noreferrer"  className="icons" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/manish._.mlr/" rel="noreferrer"  className="icons" target="_blank">
                        <FaSquareInstagram  />
                    </a>
                    </div>
                </div>

                <div className="footer-mobile">
                    <div>
                        <p><Link className="mobile-route" to='/contact'>Contact</Link></p>
                        <p><Link className="mobile-route" to='/about'>About</Link></p>
                    </div>
                    <div className="icons-container">
                    <a href="https://github.com/kungumasakthivel" className="icons">
                        <FaSquareGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ksakthivel-k/" className="icons">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/manish._.mlr/" className="icons">
                        <FaSquareInstagram />
                    </a>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer