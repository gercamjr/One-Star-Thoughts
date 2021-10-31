import "../styles/styles.css"

export default function Post() {
    return (
        <div className="post">
            <img className="post__img" src="../assets/img/drown-2.jpg" alt=""/>
            <div className="post__info">
                <div className="post__info--categories">
                    <p>Poetry</p>
                </div>
                <h3 className="post__info--title">*Drowning</h3>
            </div>
        </div>
    )
}

