import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='fixed top-0 left-10 right-10 lg:left-52 lg:right-52 z-10' >
            <div className="navbar text-white font-bold">
                <div className="navbar-start lg:hidden  ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-slate-900 text-white">
                            <li><Link to={'/home'}>THE S</Link></li>
                            <li><Link to={'/about'}>THE WHO</Link></li>
                            <li><Link to={'/blog'}>THE WHAT</Link></li>
                            <li><Link to={'/contact'}>THE POKE</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center md:hidden">
                    <Link to={'/home'}><img src="https://i.postimg.cc/Jz8LN17Y/Sa-Na-Ullah.png" alt="logo" className='w-36' /></Link>
                </div>
                <div className="lg:navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/home'}>THE S</Link></li>
                        <li><Link to={'/about'}>THE WHO</Link></li>
                        <li><Link to={'/blog'}>THE WHAT</Link></li>
                        <li><Link to={'/contact'}>THE POKE</Link></li>
                    </ul>
                </div>
                <div className="navbar-end text-white ">
                    <a href="https://www.linkedin.com/in/mohammad-sanaullah-1377a21ab/" target="_blank"><FontAwesomeIcon className='h-7 w-7 ml-2 hover:text-cyan-600' icon={faLinkedin}></FontAwesomeIcon></a>
                    <a href="https://github.com/Ali-awesome" target="_blank"><FontAwesomeIcon className='h-7 w-7 ml-2' icon={faGithub}></FontAwesomeIcon></a>
                </div>
            </div>
        </div>

    );
};

export default Navbar;