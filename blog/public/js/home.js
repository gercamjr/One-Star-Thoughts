const blogSection = document.querySelector('.posts');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if (blog.id != decodeURI(location.pathname.split("/").pop())) {
            createBlog(blog);
        }
    });
    ScrollOut().index();
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="posts__card" data-scroll>
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="section__posts--card--button btn dark">read</a>
    </div>
    `;
}