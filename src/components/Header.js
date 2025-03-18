import { useEffect, useRef } from "react";
import "../sass/header.scss"

export default function Header({progValue})
{       
    progValue = progValue ?? 0;

    const headerTag = useRef(null);
    
    
    function setPaddingTopForBodyForHeaderFixedPos() {
        // console.log(headerTag.current.offsetHeight);
        document.body.style=`padding-top: ${headerTag.current.offsetHeight}px;`;
    }

    useEffect(()=>{
        // window.onresize = setPaddingTopForBodyForHeaderFixedPos;
           
        // // window.onload = setPaddingTopForBodyForHeaderFixedPos;
        // setPaddingTopForBodyForHeaderFixedPos();
    },[])

    return (
        <header ref={headerTag} id="header-sec">
            <nav className="nav-bar">
            
                <h2 className="greetings">welcome</h2>       

                <p className="topic-btn"><a className="aTag" href="#">HOME</a></p>
                <p className="topic-btn"><a className="aTag" href="#TecSkills-title"> TECNICAL SKILLS</a></p>
                <p className="topic-btn"><a className="aTag" href="#projects-title">projects</a></p>
                <p className="topic-btn"><a className="aTag">contact</a></p>

            </nav>


            <section className="page-scroll-bar">
                <progress  max={100} min={0} value={progValue}></progress>
            </section>
        </header>);
}