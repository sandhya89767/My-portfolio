import React from './menu.scss'

export default function menu({menu,setmenu}) {
    return (
        <div className={"menu "+(menu && "active")}>
         <ul>
             <li onClick={()=>setmenu(!menu)}>
                 <a href="#intro">Home</a>
             </li>
             <li onClick={()=>setmenu(!menu)}>
                 <a href="#about">About me</a>
             </li>
             <li  onClick={()=>setmenu(!menu)}>
                 <a href="#portfolio">Portfolio</a>
             </li>
             <li  onClick={()=>setmenu(!menu)}>
                 <a href="#works">Works</a>
             </li>
             <li  onClick={()=>setmenu(!menu)}>
                 <a href="#Testimonials">Experiences</a>
             </li>
             <li  onClick={()=>setmenu(!menu)}>
                 <a href="#contact">Contact</a>
             </li>
            
         </ul>
            
        </div>
    )
}
