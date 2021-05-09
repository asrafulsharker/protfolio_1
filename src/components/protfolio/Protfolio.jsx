import "./protfolio.scss";
import ProtfolioList from "../protfolioList/ProtfolioList";
import {useState,useEffect} from 'react';
import {
    featuredProtfolio,
    webProtfolio,
    mobileProtfolio,
    designProtfolio,
    contentProtfolio
} from "../../data"

export default function Protfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([]);
    const list=[
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "design",
            title: "Design",
          },
          {
            id: "content",
            title: "Content",
          },
    ];




    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredProtfolio);
            break;
            case "web":
                setData(webProtfolio);
            break;
            case "mobile":
                setData(mobileProtfolio);
            break;
            case "design":
                setData(designProtfolio);
            break;
            case "content":
                setData(contentProtfolio);
            break;
            default:
                setData(featuredProtfolio);
        }

    },[selected])


    return (
        <div className="protfolio" id="protfolio">
            <h1>Protfolio</h1>
            <ul>
                {list.map((item)=>(
                    <ProtfolioList title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                    <img src={d.img} alt=""/>
                    <h3>{d.title}</h3>
                    </div>
                ))}

            </div>
        </div>
    )
}
