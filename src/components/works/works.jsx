
import "./works.scss"
import{useEffect,useState} from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {projects} from '../Data';
export default function Works() {
    const data =projects;
   const [currentSlide,setSlide]=useState(0);
     const handleClick = (way)=>{
         console.log("handler reached");
    if(way==="left")
    {
        if(currentSlide===0)
        setSlide(1);
        else
        setSlide(currentSlide-1);
    }
    if(way==="right")
    {
        if(currentSlide===(data.length-1))
        setSlide(data.length-1);  
        else
        setSlide(currentSlide+1);
    }

};

    return (
    <div className="works" id="works">
        <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw) `}}>
            {data.map((d)=>(
            <div className="container">
                <div className="item">

                    <div className="left">
                        <div className="leftContainer">
                        <div className="imgContainer">
                            <img src="assets/girl3.jpg"></img>
                        </div>
                        <h2> {d.title}</h2>
                        <p>
                            {d.Description}
                        </p>
                        <span>Projects</span>
                         

                        </div>

                    </div>
                    <div className="right">
                       <img src={d.img}></img>
                    </div>
                </div>
               
              

            </div>
             
             ))} 
          </div>
           
       
        <ArrowBackIosIcon className="leftarrow"  onClick={()=>handleClick("left")}/>
        <ArrowBackIosIcon className="rightArrow"  onClick={()=>handleClick("right")}/>
            
     </div>
    );
}


