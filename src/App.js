import { useEffect, useState } from "react";
import Header from "./components/Header";



export default function App(){
    const getScrollPer = () => Math.floor((window.pageYOffset/(document.body.offsetHeight - window.innerHeight) )* 100);

    const [progValue , setProgValue] = useState(getScrollPer());

    useEffect(()=>{
        console.log("done");
        document.addEventListener("scroll",()=>{
            setProgValue(getScrollPer());
        })


    },[]);

    

    return (
        <>
            <Header progValue={progValue} />
        </>
    );


}
