import { useEffect, useRef } from "react";
import "../sass/projects.scss"

export default function Projects() {

        const ContanerCubeObj = useRef(null); //<div class="cube" >
        const CubeObj = useRef(null); //<div class="cube" >
        
        const rotateBy = [];
        rotateBy['x'] = 0;
        rotateBy['y'] = 0;

        const startPinter = [];
        startPinter["x"] = 0;
        startPinter["y"] = 0;

        function rotateCubeFun(e) {
            e.stopPropagation();

            const contanerElement = ContanerCubeObj.current;
            const contanerBoxObj = {};
            const mousePageOffsite = [];

            mousePageOffsite["x"] = e.pageX ;
            mousePageOffsite["y"] = e.pageY;

            contanerBoxObj.Size = [];
            contanerBoxObj.Size["w"] = contanerElement.offsetWidth;
            contanerBoxObj.Size["h"] = contanerElement.offsetHeight;

            contanerBoxObj.pageOffsite = [];
            contanerBoxObj.pageOffsite["x"] = contanerElement.offsetWidth;
            contanerBoxObj.pageOffsite["y"] = contanerElement.offsetTop;

            contanerBoxObj.yOffsite = [ contanerBoxObj.pageOffsite["y"] ,
                                        contanerBoxObj.pageOffsite["y"] + contanerBoxObj.Size["h"] ];

            /*do not change any thing :>*/


            const SPEED = 1;


            rotateBy["x"] += mousePageOffsite["x"] >  startPinter["x"] ?  SPEED :  -SPEED;
            rotateBy["y"] += mousePageOffsite["y"] <  startPinter["y"] ?  SPEED :  -SPEED;
            
            startPinter["x"] = mousePageOffsite["x"] ;
            startPinter["y"] = mousePageOffsite["y"] ;
            CubeObj.current.style = `transform:rotateX(${rotateBy['y']}deg) rotateY(${rotateBy['x']}deg);`;
            
            
        }
        useEffect(()=>{

            
            // ContanerCubeObj.current.addEventListener("mousemove",rotateCubeFun);
            ContanerCubeObj.current.addEventListener("mousedown",(e)=>{
                            startPinter["x"] = e.pageX;
                            startPinter["y"] = e.pageY;
                            ContanerCubeObj.current.addEventListener("mousemove",rotateCubeFun)
            });

            ContanerCubeObj.current.addEventListener("mouseup",()=>{
                            ContanerCubeObj.current.removeEventListener("mousemove",rotateCubeFun);
            })

            ContanerCubeObj.current.addEventListener("touchstart",(e)=>{
                startPinter["x"] = e.pageX;
                startPinter["y"] = e.pageY;
    
                ContanerCubeObj.current.addEventListener("touchmove",rotateCubeFun )
            });

            ContanerCubeObj.current.addEventListener("touchend",()=>{

                            ContanerCubeObj.current.removeEventListener("touchmove",rotateCubeFun);

            })
            // ContanerCubeObj.current.addEventListener("mouseout",()=>{
               
            //     ContanerCubeObj.current.removeEventListener("mousemove",rotateCubeFun);
            // })

        },[])
  
        return (
            <>
                <h2 className="sec-title-h2 " id="projects-title">projects </h2>
                <section id="projects-sec" ref={ContanerCubeObj}>
                    <div className="cube"  ref={CubeObj}>
                            <div className="face front"></div>
                            <div className="face back"></div>
                            <div className="face right"></div>
                            <div className="face left"></div>
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                        </div>


                </section>
            </>
        );
}















// dir = 0;
// mouseClickPos['x'] = e.layerX ;
// mouseClickPos['y'] = e.layerY;


        // const rotate = [];
        // rotate['x'] = 0;
        // rotate['y'] = 0;
        
        // const mouseClickPos = [];
        // mouseClickPos['x'] = 0;
        // mouseClickPos['y'] = 0;
        // let dir = 0;
        // function rotateCubeFun(e) {
                     // rotate['x']+=1;
                // rotate['y']+=1;
                // console.log(e.clientX + " " + e.clientY);
                // console.log();
                // console.log(ContanerCubeObj.current.offsetWidth+" "+ContanerCubeObj.current.offsetHeight);
                // console.log("==================");
                

                // let minOfX = 0 ;
                // let minOfY = 0 ;
                // if ( e.layerX > mouseClickPos['x'] ) {
                //     minOfX = e.layerX - mouseClickPos['x'];
                // }else{
                //     minOfX= mouseClickPos['x'] - e.layerX  ;
                // }

                // if ( e.layerY > mouseClickPos['y'] ) {
                //     minOfY = e.layerY - mouseClickPos['y'];
                // }else{
                //     minOfY = mouseClickPos['y'] - e.layerY  ;
                // }

                
                // if (dir == 1 || minOfY < minOfX) { 
                //     dir == 1;
                //     rotate['y'] += e.layerY > mouseClickPos['y'] ? 1 : -1; 
                    
                // }else{

            // }
                    // rotate['x'] += e.layerX > mouseClickPos['x'] ? 1 : -1; 

                    // console.log(ContanerCubeObj.current.offsetWidth+" "+ContanerCubeObj.current.offsetHeight + " " );
                    // console.log(ContanerCubeObj.current );
                    // //off top 
                    // console.log(e.layerX +"   "+ mouseClickPos['x']);
                    // console.log(e);
                    // console.log();
                    
                    

                
        //         CubeObj.current.style = `transform:rotateX(${rotate['x']}deg) rotateY(${rotate['y']}deg);`;
        // }