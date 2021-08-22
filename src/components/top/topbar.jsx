import "./topbar.scss"
import MailIcon from '@material-ui/icons/Mail';
import { SocialIcon } from 'react-social-icons';

import { VscGithub } from 'react-icons/vsc';

export default function topbar({menu,setmenu}) {
    return (
        <div className={"topbar " +(menu && "active")}> 
          <div className="wrapper">
              <div className="left">
                  <a href="#intro" className="logo"> Sandy</a>
                    <div className="itemContainer">
                      <VscGithub/>
                       <span ><a href=" https://github.com/sandhya89767">https://github.com/sandhya89767</a></span>
                     
                      

                    </div>
                    <div className="itemContainer">
                      <MailIcon className="icon"/>
                      <span><a href="sandhya.kumari89767@gmail.com">sandhya.kumari89767@gmail.com</a></span>

                    </div>
                    <div className="itemContainer" >
                    <SocialIcon url="https://www.linkedin.com/in/sandhya-kumari-a2295118b/" />
                    </div>

              </div>
              <div className="right">
                <div className="download">
                <a href="assets/resume.pdf" class="button" download><i class="fa fa-download"></i>Download CV</a>
        
                </div>
                  <div className="hamburger" onClick={()=>setmenu(!menu)}>
                  <span className="line1"></span>
                  <span className="line2"> </span>
                  <span className="line3"></span>
                  
                  </div>
              

              </div>
          </div>
            
        </div>
    )
}


