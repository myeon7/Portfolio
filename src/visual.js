import React, { useRef }from 'react';
import Sidebar from './components/sidebar';
import Aboutme from './components/aboutme';
import Projects from './components/projects';

function Visual() {
    return(
        <>
            <Sidebar/>
            <Aboutme/>
            <Projects/>
        </>
    )
}

export default Visual;