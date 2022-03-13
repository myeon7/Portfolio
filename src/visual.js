import React, { useRef }from 'react';
import Sidebar from './components/sidebar';
import Aboutme from './components/aboutme';
import Projects from './components/projects';

function Visual() {
    
    const scrollToAboutme = useRef();
    const scrollToProjects = useRef();

    return(
        <>
            <Sidebar scrollToAboutme={scrollToAboutme} scrollToProjects={scrollToProjects}/>
            <Aboutme scrollToAboutme={scrollToAboutme}/>
            <Projects scrollToProjects={scrollToProjects}/>
        </>
    )
}

export default Visual;