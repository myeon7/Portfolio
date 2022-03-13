import React, { useState } from 'react';
import cn from "classnames";
import Display from './display';

function Project({project}) {

    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);

    return(
        <>  
            <div className={cn("contentBox", { show })}>
                <div className="modal" onClick={toggleShow}></div>
                <Display project={project} toggleShow={toggleShow}/>
            </div>

            <div className="project" onClick={toggleShow}>
                <div className="inner_project">
                    <div className="imgbox" style={{ backgroundImage: `url(${project.cover})` }}></div>
                    <div className="contentDetail">
                        <h3>{project.title}</h3>
                        <span>{project.description}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;