import "./portfolio.scss"
import PortFolioList from "../portfolioList/PortFolioList"
import {useState,useEffect} from "react";
import {Devops,Mobile,Featured,Branding,Webapp} from "../Data"

export default
function Portfoli() {
    const list=[{id:"Featured",title:"Featured"},
    {id:"webapp",title:"WebApps"},
    {id:"Devops",title:"Devops"},
    {id:"Android",title:"Android Apps"},
    {id:"Branding",title:"Branding"}
]
const [selectedItem, setSelectedItem] = useState("Featured");
const [data,setData] = useState([]);
useEffect(()=>{
    switch(selectedItem){
        case "Featured":setData(Featured);
        break;
        case "webapp":setData(Webapp);
        break;
        case "Devops":setData(Devops);
        break;
        case "Android":setData(Mobile);
        break;
        case "Branding":setData(Branding);
        break;
        default:setData(Featured);
        break;
    }
},[selectedItem])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
            {list.map(item=>(
            <PortFolioList 
            title={item.title}
            active={selectedItem===item.id}
            setSelectedItem={setSelectedItem}
            id={item.id}
            />
            ))}
            </ul>
            <div className="container">
                {
                    data.map((d)=>(

                <div className="item">
                    <img src={d.img} alt=""/>
                    <h3>{d.Title}</h3>
                    </div>
               
                    ))}
            </div>

            
            
        </div>
    )}
