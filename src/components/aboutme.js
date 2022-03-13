import React from 'react';

function Aboutme({scrollToAboutme}){
    return(
        <div id="c1" className="section clearfix" ref={scrollToAboutme}>
            <div id="links">
                <a href="https://github.com/myeon7" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/matthew-yeon-217508114/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://public.tableau.com/app/profile/matthew.yeon2232" target="_blank">
                    <i className="fa-solid fa-chart-line"></i>  
                </a>
                <a href="https://www.facebook.com/MYeon7/" target="_blank">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/myeon7" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="mailto:jyeon@emory.edu" target="_blank">
                    <i className="fas fa-envelope"></i>
                    <span>jyeon@emory.edu</span>
                </a>
            </div>

            <div className="aboutme_content">
                <div className="profileimg"></div>
                <div className="intro">
                        <h3>Front-End Developer</h3>
                        <h3>Hi, I am Matthew!</h3>
                        <span>I am a <b>Front-End Developer</b> with a <b>Business</b> background. I currently study strategic management and data analytics at Emory University's Goizueta Business School and self-taught coding. My passion lie at the intersection of technology, design and business, and I'm always looking for new ways to integrate my analytical and creative skills.</span>
                        <span>Language: <b>Python, HTML, CSS, JS, React, NodeJS, R, MySQL</b></span>
                </div>
            </div>
        </div>// main
    )
}
export default Aboutme;