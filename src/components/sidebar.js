import React, { useState } from 'react';
import { scrollIntoView } from "seamless-scroll-polyfill";
import cn from "classnames";
import './components.scss';

function Sidebar(){

    const [select, setSelect] = useState(false);
    const [main1, setMain1] = useState(true);
    const [main2, setMain2] = useState(false);
    
    return(
        <div id="sidebar">
            <div id="selected" className={cn({ select })}></div>

            <span className={cn("sidebar_content aboutme", { main1 })} onClick={() => { 
                if (main1 === false){
                    setSelect(!select);
                    setMain1(!main1);
                    setMain2(!main2);
                };
                scrollIntoView(document.querySelector("#c1"), { behavior: "smooth" });
                }}>About me</span>
            <span className={cn("sidebar_content projects", { main2 })}  onClick={() => {
                if (main2 == false) {
                    setSelect(!select);
                    setMain1(!main1);
                    setMain2(!main2);
                }
                scrollIntoView(document.querySelector("#c2"), { behavior: "smooth" });

                }}>Projects</span>
        </div>
    )
}

export default Sidebar;