import "./protfolio.scss";
import ProtfolioList from "../protfolioList/ProtfolioList";
import {useState} from 'react';
import {
    featuredProtfolio,
    webPortfolio,
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
            case "featured"
            setData(featuredProtfolio)
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
                <div className="item">
                    <img src="https://cdn57.androidauthority.net/wp-content/uploads/2018/06/monzo-bank.jpg" alt=""/>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://stormotion.io/blog/content/images/2020/09/mobile-banking-app.jpg" alt=""/>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://stormotion.io/blog/content/images/2020/09/mobile-banking-app.jpg" alt=""/>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://stormotion.io/blog/content/images/2020/09/mobile-banking-app.jpg" alt=""/>
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
