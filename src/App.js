import Topbar from "./components/top/topbar";
import Intro from "./components/Intro/intro";
import Portfolio from "./components/portfolio/portfoli"
import Works from "./components/works/works"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/contact"
import About from "./components/about/About"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/Menu/menu"

function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
  
    <div className="app">
     <Topbar menu={menuOpen} setmenu={setmenuOpen}/>
     <Menu menu={menuOpen} setmenu={setmenuOpen}/>
     <div className="sections">
       <Intro/>
       <About/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
       
     </div>

    </div>
  );
}

export default App;
