import "./about.scss";
import AddIcon from '@material-ui/icons/Add';
import SchoolIcon from '@material-ui/icons/School';

function About() {
    return (
        <div className="about" id="about" >
        <div class="container">
         
         <div className="left">
hii
         </div>
               {/* <h1 id="s">ABOUT <span id="t" style={{color:"blue"}}>ME</span></h1><br/> */}
               <img   src="http://3.bp.blogspot.com/-awcchP27iX4/VT_UiNcSzgI/AAAAAAAAF9g/kLTOjEnvBMg/s1600/About%2BMe%2BModel%2BMayhem.png" alt=""></img>
             
               <div className="right">
                  
               </div>
               
    
        </div>
        <div className="middle">
            <div className="imageContainer">
        {/* <img src="assets/sandhya2.png"  id ="s" alt=""></img> */}
        
        </div>
        <div className="content">
            <p>
            I’m a hard working and dedicated professional fullStack developer/user interface designer with a keen eye for detail, and a determination to deliver the very highest quality. I take great pride in my work, and I always try to better myself with every project I work on.

I like to write semantic, cross browser compatible code by hand that is re-useable, maintainable and easy to understand.

I am motivated, enthusiastic and well organised, with a keen eye for beautiful design, primarily based around user interfaces.

The main areas of my expertise are HTML(5), CSS(3) and JavaScript (native and jQuery),React jsx,Angular,Spring ,Java ,C++,Sql but I have intermediate knowledge of MongoDb and NOde.js.

I have worked with a number of high profile clients (both directly and indirectly) and I am comfortable working under pressure to complex specifications.

I regularly use version control systems (GIT, Mercurial) to maintain my code, and I specialise in responsive web design (RWD).
            </p>
        </div>

        </div>
       <div className="bottom">
           <div className="bottomLeft">
           <h3>THINGS I LOVE</h3>
           <ul id="love">
                        <li><a href="http://www.wordpress.com/"><img src="https://christhurman.com/wp-content/uploads/2021/01/wordpress-icon.png" alt="wordpress"/></a></li>
                        <li><a href="http://www.apple.com/"><img src="https://christhurman.com/wp-content/uploads/2021/01/apple-icon.png" alt="apple"/></a></li>
                        <li><a href="http://twitter.com/chriswthurman"><img src="https://christhurman.com/wp-content/uploads/2021/01/twitter-gray.png" alt="twitter"/></a></li>
                    </ul>
           </div>
           <div className="bottomRight">
           <h1>LOOK WHAT CAN I DO</h1>
           <ul id="skills" class="fa-ul medium-block-grid-2 small-block-grid-1">
                        <li><AddIcon  style={{color:"blue"}}/>Web Design</li>
                        <li><AddIcon  style={{color:"blue"}}/>HTML/CSS/Bootstrap/ANGULAR/React js/Javascript</li>
                        <li><AddIcon  style={{color:"blue"}}/>Spring</li>
                        <li><AddIcon  style={{color:"blue"}}/>Java</li>
                        <li><AddIcon  style={{color:"blue"}}/>C++</li>
                        <li><AddIcon  style={{color:"blue"}}/>Linux &amp; Ansible</li>
                        <li><AddIcon  style={{color:"blue"}}/>Python cgi</li>
                        <li><AddIcon  style={{color:"blue"}}/>Android</li>
                        <li><AddIcon  style={{color:"blue"}}/>Competitive coder with c++</li>
                        <li><AddIcon  style={{color:"blue"}}/>Node.js</li>
                    </ul>
           </div>

           <div className="education">
           <h1>EDUCATION</h1>
           <ul id="skills" class="fa-ul medium-block-grid-2 small-block-grid-1">
                        <li><SchoolIcon style={{color:"blue"}}/>Birla Institute Of Technology Mesra(Bachelors)<br></br>
                        <span style={{fontWeight:"400"}}>(year:-2017-2021)</span>
                        <br></br><span style={{fontWeight:"400"}}>Cgpa:-8.23</span><br></br><br></br>
                        </li>
                        <li><SchoolIcon style={{color:"blue"}}/>Dav public School<br></br> <span>(CBSE-intermediate)
                        </span><br></br><span style={{fontWeight:"400"}}>(year:-2014-2016)</span>
                        <br></br><span style={{fontWeight:"400"}}>Percentage:95.4</span>
                        </li>
                    </ul>

           </div>
       

       </div>
        </div>
    )
}

export default About
