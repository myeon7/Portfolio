import React, {useState, useRef} from 'react';
import Project from './project';
// Project Covers
import portfolio_cover from '../media/projects/portfolio_cover.jpg';
import mytube_cover from '../media/projects/mytube_cover.jpg';
import chocoblock_cover from '../media/projects/chocoblock_cover.jpg';
import lululemon_cover from '../media/projects/lululemon_cover.jpg';
import spotifyrec_cover from '../media/projects/spotifyrec_cover.jpg';
import design_cover from '../media/projects/design_cover.jpg';
// Project: Portfolio
import portfolio_img1 from '../media/projects/portfolio_img1.jpg';
import portfolio_img2 from '../media/projects/portfolio_img2.jpg';
import portfolio_img3 from '../media/projects/portfolio_img3.jpg';
// Project: MYTube
import mytube_img1 from '../media/projects/mytube_img1.png';
import mytube_img2 from '../media/projects/mytube_img2.png';
import mytube_img3 from '../media/projects/mytube_img3.png';
import mytube_img4 from '../media/projects/mytube_img4.png';
import mytube_img5 from '../media/projects/mytube_img5.png';
import mytube_img6 from '../media/projects/mytube_img6.png';
import mytube_img7 from '../media/projects/mytube_img7.png';
import mytube_img8 from '../media/projects/mytube_img8.png';
import mytube_img9 from '../media/projects/mytube_img9.png';
import mytube_img10 from '../media/projects/mytube_img10.png';
import mytube_img11 from '../media/projects/mytube_img11.png';
// Project: Lululemon
import lulu_original from '../media/projects/lululemon_original.jpg';
import lulu_main from '../media/projects/lululemon_main.jpg';
import lulu_benchmark from '../media/projects/lululemon_benchmark.jpg';
import lulu_highprototype from '../media/projects/lululemon_highprototype.jpg';
import lulu_learningprogress from '../media/projects/lululemon_learningprogress.jpg';
import lulu_svgmotion from '../media/projects/lululemon_svgmotion.jpg';
// Project: Chocoblock
import chocoblock from '../media/projects/chocoblock_content.jpg';
// Project: Design
import design_img1 from '../media/projects/design_img1.jpg';
import design_img2 from '../media/projects/design_img2.jpg';
import design_img3 from '../media/projects/design_img3.png';


function Projects(){

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
            text4: "You can see details about the project by clicking on each component from the project section.",
        },
        {
            title: "YouTube Clone",
            cover: mytube_cover,
            type: "(Personal Project)",
            prototype: "https://mytube-youtubeclone.netlify.app/",
            description: "ReactJS & YouTube API",
            time: "Jul 2021 - Aug 2021",
            // content
            task: "Cloning YouTube to learn how to develop a project using external API data",
            role: "Front-End Developer",
            image1: mytube_img1,
            t2_title: "1. Set up for YouTube Data API",
            text2: [
                "[",
                <a href="https://console.cloud.google.com/apis/dashboard" target="_blank" alt=""><b>YouTube Data API</b></a>, " → ", 
                <b>Reference</b>, " → ",
                <b>Overview</b>, " (Calling API)", " → ",
                <a href="" target="_blank" alt="Developer Console"><b>Developer Console's API Access</b></a>,  " → ",
                <b>Create Project (MYTube)</b>,
                "]", <br/>,
                "To access YouTube Data API, I first created a new project in ",
                <a href="" target="_blank" alt="Google Cloud Platform"><b>Google Cloud Platform</b></a>, 
                " to acquire API access key.",
            ],
            image2: mytube_img2,
            text3: [
                "[",
                <b>Navigation Menu</b>, " → ",
                <b>APIs & Services</b>, " → ",
                <b>Library</b>, " → ",
                <b>YouTube Data API v3</b>, " (Enable)",
                "]", <br/>, 
                "After creating a new project, I selected and enabled the API that would be used for the project from the APIs Library.", 
            ],
            image3: mytube_img3,
            // text3: ["I used ", <a href="https://www.postman.com/" target="_blank" alt="postman link"><b>Postman</b></a>, " to manage API database"],
            // t4_title: "Validating Credentials",
            text4: [
                "Then, I created credentials to get a unique API key to access the selected API. (The basic set up to access YouTube API is now completed)",
            ],
            image4: mytube_img4,
            t5_title: "2. Testing API Access",
            text5: [
                "The YouTube API allows developers to try its API on the platform itself. This was very helpful because it allowed me to conveniently check how and in what structure the data get loaded when I request them. I tried testing '",
                <a href="https://developers.google.com/youtube/v3/docs/search/list" target="_blank" alt=""><b>Search: list</b></a>, "' and '",
                <a href="https://developers.google.com/youtube/v3/docs/videos/list" target="_blank" alt=""><b>Video: list</b></a>, 
                "' by entering some basic inputs (I disabled '", <b>Google OAuth 2.0</b>, "' because I was only requesting public data, so no need for verification).",
            ],
            image5: mytube_img5,
            t6_title: [
                "3. Access API with ", <a href="https://www.postman.com/" target="_blank" alt="postman link"><b>Postman</b></a>,
            ],
            text6: [
                "To ensure the API data get properly loaded through HTTP requests, I used ", <b>Postman</b>, " to test the YouTube API. I first created a new collection and entered API key in the ", <b>Authorization</b>, " section and set the base link (main URL) in a ", <b>Variable</b>, ". Then, I added new requests (ex. Search, Videos) in the collection I intially creted, and entered key and value inputs in a format that is listed in the request parameters from the ", 
                <a href="https://developers.google.com/youtube/v3/docs/search/list" target="_blank" alt="Youtube Developer page"><b>YouTube developer page overview</b></a>, ". ", <br/>, <br/>, <b>Note:</b>, <i> if the data fails to load, check the API key or the base link to see if there is an extra slash at the end - this happened to me.</i>
            ],
            image6: mytube_img6, 
            // t7_title: "Title",
            text7: [
                'Postman also provides code snippet to connect API in all languages for developers. So I selected ',<b>"JavaScript - Fetch"</b>,
                ' (code that allows JavaScript to connect API using fetch method) and pasted to my ReactJS project code inside "useEffect(() => { ____ }, [])" of app.jsx. ', <br/>, <br/>, <b>Note:</b>,
                <i> Code Snippet only connects to API and additional options must be modified accordingly by the developer to perform as intended.</i>
            ],
            image7: mytube_img7,
            t8_title: "4. Creating Components: video_list, video_item, search_header",
            text8: [
                "To conveniently parse and handle API data, I changed the returning response value type from ",
                <b>response.text()</b>, " to ", <b>response.json()</b>, ". Then I created three components: ", <b>video_list</b>, ", ", <b>video_item</b>, " and ", <b>search_header</b>, " to show extracted API data in basic YouTube content display format. I managed styling through ", <a href="https://postcss.org/" target="_blank" alt="postcss"><b>PostCSS</b></a>, " to avoid potential overlapping of class names."
            ],
            image8: mytube_img8,
            t9_title: "5. Secure API Key",
            text9: [
                'For the maintenance and privacy purposes, I seperated my API key to the ',
                <b>.env</b>, 
                ' file and loaded the key into the project through the constructor method. I created a seperate component: ', <b>youtube.js</b>, ' to manage all the services - different ways of loading data from API with fetch method (async & await).', <br/>, <br/>, <b>Note:</b>, <i> Two solutions when sensitive data (ex. API key) gets accidently pushed to github: use <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository" target="_blank" alt="BFG repo-clearner"><b>BFG Repo-Cleaner</b></a> (suggested for team project) or <b>Regenerate API Key</b> (suggested for personal project).</i>
            ],
            image9: mytube_img9,
            t10_title: "6. Async & Await",
            text10: [
                "I created youtube.js to manage all the API data requests using 'async & await' callback method instead of fetch method to improve search function performance. And the modified code in app.jsx is now much cleaner."
            ],
            image10: mytube_img10,
            t11_title: "7. Component: video_detail",
            text11: [
                'Created a seperate component that displays the content and its information when a video gets selected (clicked).'
            ],
            image11: mytube_img11,
            t12_title: "8. Axios | fetch()",
            text12: [
                "Axios is an HTTP asynchronous connection library that uses Promise(ES6) API for Browser / Node.js. It not only uses XMLHttpsRequest or Node.js depending on the environment of the broweser, but also provides many advanced features that are not available in other similar APIs. (Install: 'yarn add axios')"
            ],
            final_header1: "Challenge",
            final_text1: [
                "In the process of requesting and getting data from YouTube API, it took me a while to comprehend the concept of ",
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" alt="promise MDN"><b>Promise</b></a>,
                " and ",
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank" alt="async MDN"><b>Async</b></a>,
                " because I wasn't familiar with the usage of callback function in ",
                <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" target="_blank" alt="asynchronous JavaScript"><b>asynchronous JavaScript</b></a>, 
                ". Thus, only after understanding about callback function and execution of different Promise states, I could finally see how async & await works to return requested API data as Promise object.", <br/>, <br/>,
                "Another challenge was when loading data through search. When I fetched data for the 'mostPopular' list, I included 'part=snippet' in the URL inside callback function but not for 'search' result. I simply needed to include 'part=snippet' in the 'search' URL, but it took me a while to figure this out."
            ],
            final_header2: "Future Plan",
            final_text2: [
                "I will continue to develop MYTube to be more like a real YouTube or think of an innovative way to display contents. In my next project, I plan to work on another API cloning project to get myself more familiar developing front-end components with contents provided from the back-end (API). Once I become more familar with front-end development using external API, I would like to try building my own API.",
            ],
            other_links: [
                <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261" target="_blank">Master the JS Interview: Promise</a>,
                " / ",
                <a href="https://blog.bitsrc.io/the-power-of-axios-cf45e085d924" target="_blank">Power of Axios</a>,
            ]
        },
        {
            title: "Spotify Machine Learning Song Recommendation",
            cover: spotifyrec_cover,
            type: "(Group Project)",
            description: "Python & Spotify API",
            time: "Oct 2021 - Dec 2021",
            // content
            task: "Merge and clean data collected from different sources for machine learning",
            role: "Data Cleaner & Back-End Developer (Connect Spotify API)",
            text1: "Analyze the correlation between a popularity of songs and their features to give recommendation of songs based on user inputted song through machine learning in Python.",
            final_header1: "",
            final_text1: "",
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
            role: "UI Designer | Web Developer",
            original: lulu_original,
            renewal: lulu_main,
            text1: "This is my first coding project to develop a static website ever since I decided to be a Front-end Developer from a UI/UX Designer. I designed the renewal template using Figma and contents acquired from lululemon's official website. Then I used basic HTML and CSS to develop the front-end part of each page and applied JavaScript (mainly JQuery) to include dynamics and animations to improve the level of engagement in the user interface.",
            image1: lulu_benchmark,
            t2_title: "Benchmarking and Design Process",
            text2: [
                "To incorporate and apply modernity to the renewed lululemon website, I looked over various web templates from pinterest and visited 1000+ websites from ", 
                <a href="https://www.awwwards.com/" target="_blank" alt="awwards"><b>awwwards</b></a>, 
                ", ",
                <a href="https://cssdesignawards.com/" target="_blank" alt="CSS Design Awards"><b>CSS Design Awards</b></a>, 
                ", " ,
                <a href="http://www.webdesignfile.com/" target="_blank" alt="Web Design File"><b>Web Design File</b></a>, 
                ", and " ,
                <a href="https://cargo.site/" target="_blank" alt="cargo"><b>cargo</b></a>, 
                ". I analyzed trending content layout, design, and motion components in these web pages and benchmarked based on features that best match the main user experience (", <b>Getting Information</b>, " & ", <b>Shopping</b>, ") of the original lululemon website."],
            image2: lulu_highprototype,
            t3_title: "Prototype",
            text3: [
                "Using ", <a href="https://www.figma.com/" target="_blank" alt="Figma"><b>Figma</b></a>,
                ", ", 
                " I created low-fidelity to high-fidelity prototype through combination of different components from various benchmarked websites. I manually scraped every contents (including text and images) from the offical lululemon website for my re-design process."
            ],
            image3: lulu_learningprogress,
            t4_title: "Learning Process",
            text4: [
                "My coding skill was limited because I only started learning HTML / CSS / JQuery a few months ago. So, I often needed to check page inspect to learn how certain styling works and compare with ",
                <a href="https://animista.net/" target="_blank" alt="animista.net"><b> animista.net</b></a>, 
                " or other online sources to understand and modify them. In this process, I also learned to use external JS libraries and manage them. For instance, I handled all the sliders using ", 
                <a href="https://swiperjs.com/" target="_blank" alt="Swiperjs"><b>Swiperjs</b></a>, "."
            ],
            image4: lulu_svgmotion,
            t5_title: "SVG Motion",
            text5: [
                "Based on my current knowledge, the most advance graphic motion I could apply was an animation with <svg> - two dimentional vector graphic in xml format. Initially, I tried using <canvas> to test different animation variations, but through more research on 2D animations, I realized I could use Illustrator program to freely draw graphics and get svg path to apply animations. So with the acquired svg path, I included stroke-dash animations to display drawing logo of lululemon."
            ],
            final_header1: "Challenge",
            final_text1: [
                "During modern web design trend research, I was amazed to see the endless possibilities of JavaScript. But my coding skill was very limited. Even when I spent hours observing and learning how certain visual effect works, I could not implement the same quality. Through research and asking, I realized that they require more complex handling of JavaScript and other external libraries such as ",
                <a href="https://animejs.com/documentation/#lineDrawing" target="_blank" alt="animeJS"><b>animeJS</b></a>, 
                ", ",
                <a href="https://threejs.org/examples/#webgl_animation_keyframes" target="_blank" alt="webGL"><b>webGL</b></a>, 
                " or ", 
                <a href="https://projects.calebevans.me/jcanvas/docs/" target="_blank" alt="HTML Canvas"><b>canvas graphic</b></a>, 
                " for advanced visual effects such as 3D motion."
            ],
            final_header2: "Future Plan",
            final_text2: [
                "In the midway through this project, I started learning ", 
                <a href="https://reactjs.org/" target="_blank" alt="ReactJS"><b>ReactJS</b></a>, 
                " and realized how efficient and less complicated this project coding structure could have been with React - I could simply build a component and reuse it instead of copying and pasting repeated components on every HTML document. Thus,, I will most likely use React and external API (instead of manually downloading content from the website) for my next project. I also plan to study more in-depth about canvas graphics, webGL and other JS libraries to display advance graphics and motions in my future projects.", 
                <br/>, <br/>,
                "(", <b>P.S.</b>, ") Currently, only '", 
                <a href="https://lululemon-renewal.netlify.app/index.html" target="_blank"><b>Home</b></a>, 
                "' & '",
                <a href="https://lululemon-renewal.netlify.app/aboutus.html" target="_blank"><b>About Us</b></a>, 
                "' pages are complete because I realized my current coding structure is very inefficient once I started understanding ReactJS components, and this made me lose motivation to carry out this project with only HTML/CSS/JQuery. I will later continue and complete or recode this project when I have free time."
            ],
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
            text4: '"Popular Landmarks"',
        },
    ]);

    return(
        <>
            <div id="c2" className="section clearfix">
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