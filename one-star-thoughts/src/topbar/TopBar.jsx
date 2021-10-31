import "../styles/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TopBar() {
    return(
        <div className="topBar">
            <div className="topBar__socialMedia">
                <FontAwesomeIcon icon={['fab', 'apple']} className="topBar__socialMedia--item" />
                <FontAwesomeIcon icon={['fab', 'microsoft']} className="topBar__socialMedia--item"/>
                <FontAwesomeIcon icon={['fab', 'google']} className="topBar__socialMedia--item"/>
            </div>
            <div className="topBar__navMenu">
                <ul className="topBar__navMenu--menu">
                    <li className="topBar__navMenu--menu--item">Home</li>
                    <li className="topBar__navMenu--menu--item">About</li>
                    <li className="topBar__navMenu--menu--item">Contact</li>
                    <li className="topBar__navMenu--menu--item">Write</li>
                    <li className="topBar__navMenu--menu--item">Logout</li>
                </ul>
            </div>
            <div className="topBar__profileIcon">
                <img src=""
            </div>
        </div>
    )
}