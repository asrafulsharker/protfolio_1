import "./intro.scss";
import { init } from 'ityped';
import { useEffect,useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            backSpeed:60,
            strings: ['Designer', 'Developer' ] ,
        });
    },[])
    return (
        <div className="intro" id="intro">
           <div className="left">
               <div className="imageContainer">
                   <img src="assets/man.png" alt=""/>
               </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Hi there, I am </h2>
                   <h1>Nirob</h1>
                   <h3>Freelancer <span ref={textRef}> </span></h3>
               </div>
               <a href="#protfolio">
                   <img src="assets/down.png" alt=""/>
               </a>
           </div>
        </div>
    )
}
