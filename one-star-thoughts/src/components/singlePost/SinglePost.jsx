import "../../styles/styles.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePost__container">
                <img src="../../assets/img/drown-2.jpg" className="post__image" alt="hand drowning in water"/>
                <h2 className="post__title">Drowning*
                <div className="single__post--edit">
                <i class="single__post--edit--icon fas fa-edit"></i>
                <i class="single__post--edit--icon fas fa-trash"></i>
                </div>
                </h2>
                <div className="single__post--info">
                    <span className="single__post--info--author">Author: <strong>One Star</strong></span>
                    <span className="single__post--info--date">1 hour ago</span>
                </div>
                <p className="single__post--content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit similique odit accusantium. Nulla similique doloribus delectus est, iure ullam unde adipisci beatae voluptatem consectetur tempore eius illum, minima tenetur placeat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur in corrupti, possimus dicta necessitatibus eos sit dolore laborum repellendus sapiente quo voluptates repellat recusandae culpa magnam dolorum delectus neque deserunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet itaque eaque modi, dolorem a sunt, aspernatur quidem illo quos praesentium ut animi ex quasi provident, sequi quod ratione temporibus!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias laudantium culpa sint sequi, voluptate id, ipsum ad numquam ut dignissimos ex consectetur commodi ab aliquid, eius debitis. Libero, enim quod?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nostrum cumque voluptates et qui omnis unde modi suscipit eligendi enim ratione, dolores cum quam consequuntur. Porro nemo voluptatem commodi? Neque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, magnam voluptatem culpa eos veritatis consequatur quos! Doloribus ullam maxime repudiandae, soluta cumque voluptatem eaque! Accusantium sapiente laboriosam consequatur quis harum.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, exercitationem corrupti doloremque id veniam sequi minima deleniti animi voluptate, quod est tempora. Doloremque iste neque non quasi explicabo error minus.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facilis inventore explicabo veniam, deserunt distinctio commodi vel ad dicta iste laboriosam. Maxime ea dolorem ipsum laudantium nostrum, accusantium nam facilis?
                </p>
            </div>
        </div>
    )
}
