import "../../styles/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TopBar() {
    return(
        <div className="topBar">
           
        <button class="nav-toggle" aria-label="toggle navigation">
            <span class="hamburger"></span>
        </button>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="index.html" class="nav__link">Home</a></li>
                <li class="nav__item"><a href="index.html#about" class="nav__link">About Me</a></li>
                <li class="nav__item"><a href="index.html#work" class="nav__link">Contact</a></li>
                <li class="nav__item"><a href="index.html#work" class="nav__link">Write</a></li>
                <li class="nav__item"><a href="index.html#work" class="nav__link">Profile</a></li>
            </ul>
        </nav>
        </div>
    )
}