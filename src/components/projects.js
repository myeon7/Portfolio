import React, {useState, useRef} from 'react';
import Project from './project';
// Project Covers
import chocoblock_cover from '../media/projects/chocoblock_cover.jpg';
import lululemon_cover from '../media/projects/lululemon_cover.jpg';
import spotifyrec_cover from '../media/projects/spotifyrec_cover.jpg';
import design_cover from '../media/projects/design_cover.jpg';
// Project1: Lululemon
import lulu_original from '../media/projects/lululemon_original.jpg';
import lulu_main from '../media/projects/lululemon_main.jpg';
import lulu_benchmark from '../media/projects/lululemon_benchmark.jpg';
import lulu_highprototype from '../media/projects/lululemon_highprototype.jpg';
import lulu_learningprogress from '../media/projects/lululemon_learningprogress.jpg';
// Project2: Chocoblock
import chocoblock from '../media/projects/chocoblock_content.jpg';
// Project3: Design
import design_img1 from '../media/projects/design_img2.jpg';


function Projects({scrollToProjects}){

    const idx = useRef(0);
    const [projects, setProject] = useState([
        {
            title: "Lululemon Renewal",
            cover: lululemon_cover,
            type: "(Personal Project)",
            description: "HTML / CSS / JQuery",
            prototype: "",
            time: "Apr 2021 - Jul 2021",
            // content
            task: "Lululemon website redesign to improve UI",
            role: "UI Designer | Front-End Developer",
            
            original: lulu_original,
            renewal: lulu_main,
            text1: "I re-designed the website using the original contents from lululemon offical webpage. I used basic HTML and CSS to develop frontend part of the page and applied JavaScript (mainly JQuery) to include dynamics and animations to improve the user interface.",
            image1: lulu_benchmark,
            text2: "To incorporate and apply modern features to the renewed lululemon website, I looked over various web templates from pinterest and visited 1000+ websites from awwwards, CSS Design Awards, and Web Design File. I analyzed common content layout / design / motion component throughout various web pages and benchmarked them based on features that best matches with user experience in the original lululemon website.",
            image2: lulu_highprototype,
            text3: "Through incorporation of different aspects from benchmarked web templates, I used Figma to complete high-fidelity prototype of re-designed lululemon website.",
            image3: lulu_learningprogress,
            text4: "TEXT",
            final_header1: "Challenge",
            final_text1: "TEXT",
            final_header2: "Future Plan",
            final_text2: "As I researched for modern web design trend, I was amazed to see the endless posibilities of design aspect of web features and functionalities using JavaScript.",
        },
        {
            title: "Spotify Song Recommendation",
            cover: spotifyrec_cover,
            type: "(Group Project)",
            description: "Python & Spotify API",
            time: "Oct 2021 - Dec 2021",
            // content
            task: "Analyze ",
            role: "",
            text1: "Analyze the correlation between song features and its popularity and give recommendation of songs through machine learning using Python",
            final_header: "Future Plan",
            final_text: "Finally, ",
        },
        {
            title: "YouTube Clone",
            type: "(Personal Project)",
            prototype: "",
            description: "React & YouTube API",
            time: "Jul 2021 - Aug 2021",
            // content
            task: "Cloning YouTube to learn how to develop a project using external API data",
            role: "Front-End Developer",
            final_header: "Future Plan",
            final_text: "Finally, ",
        },
        {
            title: "Choco Block",
            cover: chocoblock_cover,
            type: "(Personal Project)",
            prototype: "https://www.behance.net/gallery/115126887/Choco-Block-2021",
            description: "Photoshop / Illustrator / Dimension",
            time: "Jan 2021 - Mar 2021",
            // content
            task: "Chocolate Branding & Product Package Designing",
            role: "UX Brand + Product Designer",
            image1: chocoblock,
        },
        {
            title: "Next Project",
            type: "(N.A.)",
            description: "In Progress..",
            // content
        },
        {
            title: "Design Work",
            cover: design_cover,
            type: "(Personal)",
            description: "Photoshop / Illustrator",
            // content
            image1: design_cover,
            image2: design_img1,
        },
    ]);

    return(
        <>
            <div id="c2" className="section clearfix" ref={scrollToProjects}>
                <div className="projects_content">
                {
                    projects.map(project => (
                        <Project key={idx.current += 1} project={project}/>
                    ))
                }
                </div>
            </div> 
        </>
    )
}

export default Projects; 