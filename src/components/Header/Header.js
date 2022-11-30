import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';

export default function Header(){
    return(
        <div className='main-header'>
            <header>
                <nav className='menu'>
                    <li> <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink></li>
                    <li> <NavLink to="/new-blog" style={{ textDecoration: 'none' }}>New-Blog</NavLink></li>
                </nav>
            </header>
        </div>
    )
}