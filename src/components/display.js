import React, { useRef } from 'react';

function Prototype(prototype){
    return(
        <div className="show_prototype">
            <a href={prototype.prototype} target="_blank">Prototype</a>
            <div className="arrow"><i className="fa-solid fa-sort-up"></i></div>
        </div>
    )
}

function FinalPart({project}){
    return(
        <div className="inner_last">
            <h3>{project.final_header1}</h3>
            <p className="inner_text">{project.final_text1}</p>
            <h3>{project.final_header2}</h3>
            <p className="inner_text">{project.final_text2}</p>
        </div>
    )
}

function Display({project, toggleShow}) {

    const scrolltoTop = useRef();
    // const top = window.pageYOffset || document.documentElement.scrollTop

    return(
        <>
            <div className="to_top" onClick={() => {scrolltoTop.current.scrollIntoView({behavior: 'smooth'});}}>
                <i className="fa-solid fa-sort-up"></i>
            </div>

            <div id="displayBox">
                <div className="close clearfix" onClick={toggleShow}> 
                    <i className="fa-solid fa-xmark" size="lg"></i> 
                </div>
                <div className="inner_display" ref={scrolltoTop}>
                    <div className="inner_header">
                        <h3>{project.title} <span>{project.type}</span></h3>
                        <h4>{project.description}</h4>
                        <p>{project.time}</p>
                        { project.prototype && <Prototype prototype={project.prototype}/> }
                    </div>

                    <div className="inner_content">
                        { project.task && <h3><span>Task:</span> {project.task}</h3> }
                        { project.role && <h3><span>Role:</span> {project.role}</h3> }
                        
{/* ONLY FOR LULULEMON */}
                        { project.original && 
                            <div className="lulu_only">
                                <div>
                                    <p className="original">Original</p>
                                    <a href="https://shop.lululemon.com/" target="_blank" alt="lululemon offical"><img src={project.original} alt="lululemon official"/></a>
                                </div>
                                <div>
                                    <p className="renewal">Renewal</p>
                                    <a href={project.prototype} target="_blank" alt="lululemon renewal"><img src={project.renewal} alt="lululemon renewal"/></a>
                                </div>
                            </div>
                        }

{/* ONLY FOR DESIGN */}

                        {/* { project.d1 && 
                            <div className="design_only clearfix">
                                <div className="imgbox" style={{ backgroundImage: `url(${project.d1})` }}></div>
                                <div className="imgbox" style={{ backgroundImage: `url(${project.d2})` }}></div>
                            </div>
                        } */}
{/* PROJECT CONTENTS */}
                        <p className="inner_text">{project.text1}</p>
                        <img src={project.image1} alt=""/>
                        <p className="inner_text">{project.text2}</p>
                        <img src={project.image2} alt=""/>
                        <p className="inner_text">{project.text3}</p>
                        <img src={project.image3} alt=""/>
                        <p className="inner_text">{project.text4}</p>
                    </div>
                    
                    { project.final_header1 && <FinalPart project={project}/> }
                </div>
            </div>
        </>
    )
}

export default Display;