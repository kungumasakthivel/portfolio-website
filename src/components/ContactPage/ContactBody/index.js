import {Component} from 'react'
import './index.css'
import {FaPhoneAlt} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import { FaSquareGithub, FaLinkedin, FaSquareInstagram} from "react-icons/fa6";

class ContactBody extends Component {
    render() {
        return (
            <div className='container-contact'>
                <div className='details'>
                    <FaPhoneAlt className='icons-phone'/>
                    <label className='label'>Phone:</label>
                    <p>+91 90800 51530</p>
                </div>
                <div className='details'>
                    <HiOutlineMail className='icons-email'/>
                    <label className='label'>Email:</label>
                    <p>mish9976@gmail.com</p>
                </div>
                <div className="footer-on-contact">
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
            </div>
        )
    }
}

export default ContactBody
