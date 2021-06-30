import "./topbar.scss"
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

export default function topbar({menu,setmenu}) {
    return (
        <div className={"topbar " +(menu && "active")}> 
          <div className="wrapper">
              <div className="left">
                  <a href="#intro" className="logo"> Sandy</a>
                    <div className="itemContainer">
                      <PersonIcon className="icon"/>
                      <span>+91867</span>

                    </div>
                    <div className="itemContainer">
                      <MailIcon className="icon"/>
                      <span>sandy134@gmail.com</span>

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


