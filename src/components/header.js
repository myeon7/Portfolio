import React from 'react';
import './components.scss';

function Header(){
    return(
        <header className="main-header">
            <h1 className="logo">Matthew Yeon</h1>
            <div id="menu">
                <ul>
                    <li id="resume"><a href={require('../media/Matthew Yeon Resume.pdf')}>Resume</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;