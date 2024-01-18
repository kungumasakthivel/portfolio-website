import { Component } from "react";
import './index.css'

class ProjectBody extends Component {
    render() {
        return(
            <div className="container-project">
                <div className="project-box">
                    <h1 className="heading">Login/Register</h1>
                    <div className="project-buttons">
                        <a 
                        className="links-project highlight-links" 
                        href="https://github.com/kungumasakthivel/Login-Register"
                        target="_blank"
                        rel="noreferrer"
                        >Code
                        </a>
                        <a className="links-project" href="#">View</a>
                    </div>
                </div>
                <div className="project-box">
                    <h1 className="heading">Portfolio Website</h1>
                    <div className="project-buttons">
                        <a 
                        className="links-project highlight-links" 
                        href="https://github.com/kungumasakthivel/Portfolio"
                        target="_blank"
                        rel="noreferrer"
                        >Code
                        </a>
                        <a className="links-project" href="">View</a>
                    </div>
                </div>
                <div className="project-box">
                    <h1 className="heading">Search Application</h1>
                    <div className="project-buttons">
                        <a 
                        className="links-project highlight-links" 
                        href="https://github.com/kungumasakthivel/search-application-using-js"
                        target="_blank"
                        rel="noreferrer"
                        >Code
                        </a>
                        <a 
                        className="links-project" 
                        href="https://jssearch.ccbp.tech/"
                        target="_blank"
                        rel="noreferrer"
                        >View</a>
                    </div>
                </div>
                <div className="project-box">
                    <h1 className="heading">Food Ordering Page</h1>
                    <div className="project-buttons">
                        <a 
                        className="links-project highlight-links" 
                        href="https://github.com/kungumasakthivel/Front-End-Project-Food-Munch-Web-Application"
                        target="_blank"
                        rel="noreferrer"
                        >Code
                        </a>
                        <a 
                        className="links-project" 
                        href="https://foodmanish9095.ccbp.tech/"
                        target="_blank"
                        rel="noreferrer"
                        >View</a>
                    </div>
                </div>                
            </div>
        )
    }
}

export default ProjectBody;