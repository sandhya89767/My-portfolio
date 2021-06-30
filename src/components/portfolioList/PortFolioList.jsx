import "./portfolioList.scss"

export default  function PortFolioList({title,active,id,setSelectedItem}) {
    return (
        <li className={active?"PortFolioList active":"PortFolioList"} onClick={()=>setSelectedItem(id)}>
            {title}
            
        </li>
    )
}


