import {Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {
        return(
        <nav>
       <div className='header'>
            
            <div className='sub1'>
                <Link className='logo' to='/'><h1>portfo<span className='l-style'>li</span>o</h1></Link>
            </div>
            <ul className='sub-header'>
                <li className='item'><Link className='link' to="/">Home</Link></li>
                <li className='item'><Link className='link project-link' to="/project">Project</Link></li>
                <li className='item'><Link className='link' to="/about">About</Link></li>
                <li className='item'><Link className='link' to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div class='modile-header'>
            <div className='sub2'>
                <Link className='logo' to='/'><h1>portfo<span className='l-style'>li</span>o</h1></Link>
            </div>
            <ul className='sub-header'>
                <li className='item'><Link className='project-link' to='/project'>Project</Link></li>
            </ul>
        </div>
        </nav>
        )
    }
}  

export default Header