
import "./works.scss"
import{useEffect,useState} from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {projects} from '../Data';
import { Button } from 'reactstrap';
export default function Works() {
    var arr = [];
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
                       <div className="content">
                       
                        <h2> {d.title}</h2>
                        <p>
                            {d.Description}
                            <h1>Skills Used</h1>
                        </p>
                        
                        </div>
                       
                       
                       <div className="buttons">
                      
                            {d.skills&&d.skills.map(function (skill, i) { 
												return <div key={i}>
                                                 
                                                 <Button color="dange">{skill}</Button>{' '}
                                                  
												</div>
											})}
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


