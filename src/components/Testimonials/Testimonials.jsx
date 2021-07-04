import "./testimonials.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {experiences} from '../Data'
import { useState } from "react";

export default function Testimonials() {
    const data=experiences;

    return (
        <div className="Testimonials" id="Testimonials">
            <h1>Working Experience</h1>
           
            <div className="container">
            {data.map((d)=>(
                <div className="card">
                    <div className="top">
                        <div className="topimages">
                   
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnDM9N2H0WHUDyI5lR805VcyQVKAuPjHG-A&usqp=CAU" alt="" className="left"/>
                     <img className="user"  src={d.img} alt=""/>
                     </div>
                    <span className="company"><h2> Company:{d.company}</h2></span>
                     <span><h3>{d.Title}</h3></span>
                     
                    </div>
                    <div className="center">
                   
                      {d.Description}
                    </div>
                    <div className="bottom">
                        <h3>Working Time</h3>
                        <h4>
                           {d.Working}
                        </h4>
                    </div>
                </div>
                ))}
            </div>
            
            
        </div>
    )
}

