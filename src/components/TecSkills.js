import imgGit from  "../assets/tech-imgs/git.png";
import imgJs from  "../assets/tech-imgs/javascript.png";
import imgNodejs from  "../assets/tech-imgs/nodejs.png";
import imgC from  "../assets/tech-imgs/c.png";
import img3dots from "../assets/tech-imgs/-3-dots.gif";
function Card({techImgUrl,techName,techWeb}) {
    

    function route() {
        window.open(techWeb);
    }
    return (

        <div className="tech-card" onClick={techWeb && route} title={techWeb}>
            <div className="tech-img">
                <img src={techImgUrl} alt={techName + " img"} loading="lazy" />
            </div>
            <div className="tech-name">{techName}</div>
        </div>

    );
}

export default function TecSkills() {
    
    return (
        <section id="TecSkills-sec-cards">

            <Card techImgUrl={imgGit} techName={"git"} techWeb={"https://git-scm.com/"}/> 
            <Card techImgUrl={imgJs} techName={"javaScript"} techWeb={"https://262.ecma-international.org/"}/> 
            <Card techImgUrl={imgNodejs} techName={"nodejs"} techWeb={"https://nodejs.org/"}/> 
            <Card  techImgUrl={imgC} techName={"C"} techWeb={"https://en.cppreference.com/w/c"}/>

            <Card  techImgUrl={img3dots} techName={"keepGoing"} techWeb={"https://github.com/null-gman"}/>
        </section>


    );
}