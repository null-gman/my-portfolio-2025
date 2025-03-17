import { useEffect, useState } from "react";
import Header from "./components/Header";
import TecSkills from "./components/TecSkills";



export default function App(){
    const getScrollPer = () => {
        
        const winOff = +window.pageYOffset;
        if (+document.body.offsetHeight < +window.innerHeight) {
            return 100;
        }
        let websiteHeight = (+document.body.offsetHeight - +window.innerHeight) ;
    
        
        if(winOff === 0 && websiteHeight === 0){
      
            return 100;
        }       
        
        if (websiteHeight === 0 ) {websiteHeight = document.body.offsetHeight;}
        const winOff_div_websiteHeight = winOff/websiteHeight;
        const progValue =   Math.floor((winOff_div_websiteHeight)*100);
        // console.log(progValue);
        return progValue;
    }
        

    
    const [progValue , setProgValue] = useState(getScrollPer());

    useEffect(()=>{
        document.addEventListener("scroll",()=>{
            setProgValue(getScrollPer());
        })


    },[]);

    

    return (
        <>
            <Header progValue={progValue} />
            <TecSkills/>
        </>
    );


}
