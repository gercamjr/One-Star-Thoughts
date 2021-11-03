import "../../styles/styles.css";



export default function Header() {
    return (
        <div className="header">
            <img src="../../assets/img/one-star-logo-1.png" alt="One Star Logo" className="header__logo"/>
            <div className="header__section">
                <h1 className="header__section--title">One Star Thoughts</h1>
                <h3 className="header__section--subtitle">One Star Rated Poetry & the Occasional Life Rambling</h3>
            </div>
            
        </div>
    )
}
