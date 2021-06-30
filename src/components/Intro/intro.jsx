import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useEffect,useRef} from "react";
import {init} from "ityped"

export default function Intro() {
    const typeRef=useRef();
    useEffect(()=>{
      init(typeRef.current, { 
            showCursor: true,
            backDelay:1500,
            typeSpeed:  100,
            strings: ['Frontend Developer', 'Backend Developer','Devops' ]
         });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="https://i.pinimg.com/originals/0c/b0/ae/0cb0aec97240b7d9746073cd3ba6c26f.gif" alt="/"></img>
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                <h1>Hi There! </h1>
                <h2> I'm Sandhya</h2>
                <h3>freeLancer <span ref={typeRef}> </span></h3>
                
                
                </div>
                <a href="#about" alt="/">
            <ExpandMoreIcon className="icon" style={{color:"white"}} />   
            </a>     
               
            </div>  
            
        </div>
    )
}

