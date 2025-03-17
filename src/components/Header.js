

export default function Header({progValue})
{       
    progValue = progValue ?? 0;


   
    return (
        <header id="header-sec">
            <nav className="nav-bar">
            
                <h2 className="greetings">welcome</h2>       

                <p className="topic-btn">HOME</p>
                <p className="topic-btn">TECNICAL SKILLS</p>
                <p className="topic-btn">projects</p>
                <p className="topic-btn">contact</p>

            </nav>


            <section className="page-scroll-bar">
                <progress  max={100} min={0} value={progValue}></progress>
            </section>
        </header>);
}