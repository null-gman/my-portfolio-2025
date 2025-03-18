import "../sass/footer.scss";
import { FaGithub } from "react-icons/fa6";

export default function Footer(){
    const FULL_YEAR = String((new Date).getFullYear());
    return (

        <footer id="footer-sec">
            {/* <div className="lineBreak"></div> */}
            <section className="copyRight">
                <p>&copy;{FULL_YEAR}&nbsp;</p>
                
                <a href="#">
                    <FaGithub/>null-gman
                </a> &nbsp;| this website repo on&nbsp; 
                 <a href="#">
                    Github
                </a> 
            </section>
        </footer>


    );

}