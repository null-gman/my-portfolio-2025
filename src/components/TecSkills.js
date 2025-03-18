import { useEffect, useRef, useState } from "react";
import "../sass/tecSkills.scss"

import imgGit from  "../assets/tech-imgs/git.png";
import imgJs from  "../assets/tech-imgs/javascript.png";
import imgNodejs from  "../assets/tech-imgs/nodejs.png";
import imgC from  "../assets/tech-imgs/c.png";
import img3dots from "../assets/tech-imgs/-3-dots.gif";
import imgReact from  "../assets/tech-imgs/react.png";
import imgdebian from  "../assets/tech-imgs/debian.png";
import imgNpm from  "../assets/tech-imgs/npm.png";
import imgSass from  "../assets/tech-imgs/sass.png";
import imgSqlite3 from  "../assets/tech-imgs/sqlite3.png";

import img3dots from "../assets/tech-imgs/-3-dots.gif";

function Card({techImgUrl,techName,techWeb}) {

    const techTextRef = useRef(null); 

    const cardTagRef = useRef(null); 
    
    
    function openLink() {
        techWeb ? window.open(techWeb) : console.log("no link for "+ techName);
    }

    function onimgLoad() {
        // console.log("loaded -> " + techName);
        
        cardTagRef.current.addEventListener("mouseover", ()=>{
            techTextRef.current.style="transform: translateY(0%)";
        });

        cardTagRef.current.addEventListener("mouseout", ()=>{
            techTextRef.current.style="transform: translateY(-100%)";
        });
    }


    return (

        <div ref={cardTagRef} className="tech-card" title={techWeb} >
            <div className="tech-img">
                <img onClick={openLink}  herf ={techWeb} src={techImgUrl} alt={techName + " img"} loading="lazy" onLoad={onimgLoad} />
            </div>
            <div className="tech-name"  ref={techTextRef} >{techName}</div>
        </div>

    );
}

export default function TecSkills() {
    
    return (
        <>
            <h2 className="sec-title-h2 " id="TecSkills-title">TecSkills </h2>
            <section id="TecSkills-sec-cards">

                <Card techImgUrl={imgGit} techName={"git"} techWeb={"https://git-scm.com/"}/> 
                <Card techImgUrl={imgJs} techName={"javaScript"} techWeb={"https://262.ecma-international.org/"}/> 
                <Card techImgUrl={imgNodejs} techName={"nodejs"} techWeb={"https://nodejs.org/"}/> 
                <Card  techImgUrl={imgC} techName={"C"} techWeb={"https://en.cppreference.com/w/c"}/>
                <Card techImgUrl={imgReact} techName={"reactjs"} techWeb={"https://react.dev/"}/> 
                <Card techImgUrl={imgdebian} techName={"GNU/linux"} techWeb={"https://www.debian.org/"}/> 
                <Card  techImgUrl={imgNpm} techName={"npm"} techWeb={"https://www.npmjs.com/"}/>
                <Card techImgUrl={imgSass} techName={"sass"} techWeb={"https://sass-lang.com/"}/> 
                <Card techImgUrl={imgSqlite3} techName={"sqlite3"} techWeb={"https://www.sqlite.org/index.html"}/> 


                <Card techImgUrl={"https://upload.wikimedia.org/wikipedia/commons/d/dd/Big_%26_Small_Pumkins.JPG "} 
                        techName={"test"} techWeb={null}/>           
                <Card  techImgUrl={img3dots} techName={"keepGoing"} techWeb={"https://github.com/null-gman"}/>

            </section>

        </>

    );
}