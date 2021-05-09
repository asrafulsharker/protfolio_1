import "./protfolioList.scss"

export default function ProtfolioList({id, title, active, setSelected}) {
    return (
        <li className={active ? "protfolioList active" : "protfolioList"}
        onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
