import React, { useRef, useCallback, useEffect } from 'react';

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
            <h3 className="title">{project.final_header1}</h3>
            <p className="inner_text">{project.final_text1}</p>
            <h3 className="title">{project.final_header2}</h3>
            <p className="inner_text">{project.final_text2}</p>
        </div>
    )
}

function Display({project, toggleShow}) {

    const scrolltoTop = useRef();
    // const top = window.pageYOffset || document.documentElement.scrollTop

    // ** Press ESC Key to exit display
    // const esc = useCallback(e => {
    //     if(e.key === "Escape"){
    //         toggleShow();
    //     }
    // }, []);
    // useEffect(() => {
    //     document.addEventListener("keydown", esc, false);
    //     return () => {
    //         document.removeEventListener("keydown", esc, false);
    //     };
    // }, []);

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

{/* PROJECT CONTENTS */}
                        <p className="inner_text title">{project.t1_title}</p>
                        <p className="inner_text">{project.text1}</p>
                        <img src={project.image1} alt=""/>
                        <p className="inner_text title">{project.t2_title}</p>
                        <p className="inner_text">{project.text2}</p>
                        <img src={project.image2} alt=""/>
                        <p className="inner_text title">{project.t3_title}</p>
                        <p className="inner_text">{project.text3}</p>
                        <img src={project.image3} alt=""/>
                        <p className="inner_text title">{project.t4_title}</p>
                        <p className="inner_text">{project.text4}</p>
                        <img src={project.image4} alt=""/>
                        <p className="inner_text title">{project.t5_title}</p>
                        <p className="inner_text">{project.text5}</p>
                        <img src={project.image5} alt=""/>

                        { project.t6_title && 
                            <>
                                <p className="inner_text title">{project.t6_title}</p>
                                <p className="inner_text">{project.text6}</p>
                                <img src={project.image6} alt=""/>
                                <p className="inner_text title">{project.t7_title}</p>
                                <p className="inner_text">{project.text7}</p>
                                <img src={project.image7} alt=""/>
                                <p className="inner_text title">{project.t8_title}</p>
                                <p className="inner_text">{project.text8}</p>
                                <img src={project.image8} alt=""/>
                                <p className="inner_text title">{project.t9_title}</p>
                                <p className="inner_text">{project.text9}</p>
                                <img src={project.image9} alt=""/>
                                <p className="inner_text title">{project.t10_title}</p>
                                <p className="inner_text">{project.text10}</p>
                                <img src={project.image10} alt=""/>
                                <p className="inner_text title">{project.t11_title}</p>
                                <p className="inner_text">{project.text11}</p>
                                <img src={project.image11} alt=""/>
                                <p className="inner_text title">{project.t12_title}</p>
                                <p className="inner_text">{project.text12}</p>
                                <img src={project.image12} alt=""/>
                                <p className="inner_text title">{project.t13_title}</p>
                                <p className="inner_text">{project.text14}</p>
                            </>
                        }
                    </div>
                    
                    { project.final_header1 && <FinalPart project={project}/> }
                </div>
            </div>
        </>
    )
}

export default Display;