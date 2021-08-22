import "./about.scss";
import AddIcon from '@material-ui/icons/Add';
import SchoolIcon from '@material-ui/icons/School';

function About() {
    return (
        <div className="about" id="about" >
        <div className="container">
         
         <div className="left">

         </div>
               {/* <h1 id="s">ABOUT <span id="t" style={{color:"blue"}}>ME</span></h1><br/> */}
               <img   src="http://3.bp.blogspot.com/-awcchP27iX4/VT_UiNcSzgI/AAAAAAAAF9g/kLTOjEnvBMg/s1600/About%2BMe%2BModel%2BMayhem.png" alt=""></img>
             
               <div className="right">
                  
               </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        </div>
        <div className="middle">
        
        <div className="content">
            <p>
            <img src="data:image/jpeg;base64,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"   alt=""></img> 
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
