import "../../styles/styles.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <h3 className="sidebar__item--title">Categories</h3>
                <ul className="sidebar__item--categories--list">
                    <li className="sidebar__item--categories--list-item">
                        Poetry
                    </li>
                    <li className="sidebar__item--categories--list-item">
                        Life Ramblings
                    </li>
                    <li className="sidebar__item--categories--list-item">
                        Music
                    </li>
                </ul>
            </div>

            <div className="sidebar__item">
                <h3 className="sidebar__item--title">Follow Me</h3>
            </div>
        </div>
    )
}
