import "../styles/styles.css"

export default function Post() {
    return (
        <div className="post">
            <img src="../assets/img/drown-2.jpg" alt="" className="post__img"/>
            <div className="post__info">
                <div className="post__info--categories">
                    <span className="post__info--categories--item">Poetry</span>
                    <span className="post__info--categories--item">Life</span>
                </div>
                <h3 className="post__info--title">*Drowning</h3>
                <p className="post__info--time">1 hour ago</p>
                <p className="post__info--description">I'm tired of having these days. I want to be happy. I do.& most of the time I am.Happy. With you. But then a day like today comes. Those days.. Those days where all the tears I cried for youand all the anger I had for youjust come rushing back inand it once again feels</p>
            </div>
        </div>
    )
}

