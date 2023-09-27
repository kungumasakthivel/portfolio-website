import {Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {
        return(
        <nav>
        <div className='header'>
            
            <div className='sub1'>
                <h1>portfolio</h1>
            </div>
            <ul className='sub-header'>
                <li className='item'><Link className='link' to="/">Home</Link></li>
                <li className='item'><Link className='link' to="/project">Project</Link></li>
                <li className='item'><Link className='link' to="/about">About</Link></li>
                <li className='item'><Link className='link' to="/contact">Contant</Link></li>
            </ul>
        </div>
        </nav>
        )
    }
}

export default Header