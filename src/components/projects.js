import React, {useState, useRef} from 'react';
import Project from './project';
// Project Covers
import portfolio_cover from '../media/projects/portfolio_cover.jpg';
import mytube_cover from '../media/projects/mytube_cover.jpg';
import chocoblock_cover from '../media/projects/chocoblock_cover.jpg';
import lululemon_cover from '../media/projects/lululemon_cover.jpg';
import spotifyrec_cover from '../media/projects/spotifyrec_cover.jpg';
import design_cover from '../media/projects/design_cover.jpg';
// Project: Lululemon
import portfolio_img1 from '../media/projects/portfolio_img1.jpg';
import portfolio_img2 from '../media/projects/portfolio_img2.jpg';
import portfolio_img3 from '../media/projects/portfolio_img3.jpg';
// Project: Lululemon
import lulu_original from '../media/projects/lululemon_original.jpg';
import lulu_main from '../media/projects/lululemon_main.jpg';
import lulu_benchmark from '../media/projects/lululemon_benchmark.jpg';
import lulu_highprototype from '../media/projects/lululemon_highprototype.jpg';
import lulu_learningprogress from '../media/projects/lululemon_learningprogress.jpg';
// Project: Chocoblock
import chocoblock from '../media/projects/chocoblock_content.jpg';
// Project: Design
import design_img1 from '../media/projects/design_img1.jpg';
import design_img2 from '../media/projects/design_img2.jpg';
import design_img3 from '../media/projects/design_img3.png';


function Projects({scrollToProjects}){

    const idx = useRef(0);
    const [projects, setProject] = useState([
        {
            title: "Welcome to my Portfolio (m.jiwooyeon.com)",
            cover: portfolio_cover,
            description: "Created with ReactJS",
            // time: "Oct 2021 - Dec 2021",
            // content
            // task: "Analyze ",
            role: "",
            text1: "My portfolio website serves as a source of record for my journey as a Front-end Developer as well as my personal playground to implement knowledges and features I acquired. Please contact me if you want to be part of my journey! 😁",
            image1: portfolio_img1,
            text2: "Here is a brief introduction of myself.",
            image2: portfolio_img2,
            text3: "You can check out my projects here. I love designing and coding!",
            image3: portfolio_img3,
            text4: "You can see details about the project by clicking on each component from the project section. I am always available to discuss more about them! 😃",
        },
        {
            title: "YouTube Clone",
            cover: mytube_cover,
            type: "(Personal Project)",
            prototype: "",
            description: "ReactJS & YouTube API",
            time: "Jul 2021 - Aug 2021",
            // content
            task: "Cloning YouTube to learn how to develop a project using external API data",
            role: "Front-End Developer",
            final_header1: "Future Plan",
            final_text1: "Finally, ",
        },
        {
            title: "Spotify Machine Learning Song Recommendation",
            cover: spotifyrec_cover,
            type: "(Group Project)",
            description: "Python & Spotify API",
            time: "Oct 2021 - Dec 2021",
            // content
            task: "Analyze ",
            role: "",
            text1: "Analyze the correlation between song features and its popularity and give recommendation of songs through machine learning using Python",
            final_header1: "Future Plan",
            final_text1: "Finally, ",
        },
        {
            title: "Lululemon Renewal",
            cover: lululemon_cover,
            type: "(Personal Project)",
            description: "HTML / CSS / JQuery",
            prototype: "https://lululemon-renewal.netlify.app/",
            time: "Apr 2021 - Jul 2021",
            // content
            task: "Lululemon website redesign to improve UI",
            role: "UI Designer | Front-End Developer",
            
            original: lulu_original,
            renewal: lulu_main,
            text1: "This is my first coding project to develop a static website since I decided to be a Front-end Developer from a UI/UX Designer. I designed the renewal template using Figma and contents acquired from lululemon's official website. Then I used basic HTML and CSS to develop the front-end part of each page and applied JavaScript (mainly JQuery) to include dynamics and animations to improve the level of engagement in user interface.",
            image1: lulu_benchmark,
            text2: "To incorporate and apply modernity to the renewed lululemon website, I looked over various web templates from pinterest and visited 1000+ websites from awwwards, CSS Design Awards, and Web Design File. I analyzed trending content layout, design, and motion components in these web pages and benchmarked based on features that best match the main user experience (Getting Information & Shopping) of the original lululemon website.",
            image2: lulu_highprototype,
            text3: "Using Figma, I created low-fidelity to high-fidelity prototype through combination of different components from various benchmarked websites. I manually scraped every contents (including text and images) from the offical lululemon website for my re-design process.",
            image3: lulu_learningprogress,
            text4: "My coding skill was limited because I only started learning HTML / CSS / JQuery a few months ago. So, I often needed to check page inspect to learn how certain styling works and compare with animista.net or other online sources to understand and modify them. In this process, I also learned to use external JS libraries and manage them. For instance, I handled all the sliders using swiperjs.",
            final_header1: "Challenge",
            final_text1: "During modern web design trend research, I was amazed to see the endless possibilities of JavaScript. But my coding skill was very limited. Even when I spent hours observing and learning how certain visual effect works, I could not implement the same quality. Through research and asking, I realized that they require more complex handling of JavaScript and other external libraries such as webGL for advanced visual effects such as 3D movement. ",
            final_header2: "Future Plan",
            final_text2: "Towards the end of this project, I've been learning React and realized how efficient and less complicated this project coding structure could have been with React - I could simply build a component and reuse it instead of copying and pasting repeated components on every HTML document. Therefore, I will be using React and external API (instead of manually downloading content from the website) for my next project. I will also study webGL or other JS libraries more in-depth for future 3D visualizations.",
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
        // {
        //     title: "Next Project",
        //     type: "(N.A.)",
        //     description: "In Progress..",
        //     // content
        // },
        {
            title: "Design Work",
            cover: design_cover,
            type: "(Personal)",
            description: "Photoshop / Illustrator",
            // content
            image1: design_img1,
            text2: '"Conceptual Personal Identity" (Dot Paint | Polygon Art | Pop Art | Paper Art)',
            image2: design_img2,
            text3: '"Polygon Art - Eagle & Black Panther"',
            image3: design_img3,
            text4: '"4 Landmarks"',
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