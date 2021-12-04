const blogSection = document.querySelector('.posts');

const callback = (entries) => {
    entries.forEach(
        (entry) => {
            if (entry.isIntersecting) {
                console.log("the element is intersecting");
                entry.target.style.animation = entry.target.dataset.fade;
                entry.target.style.opacity = 1;
            } else {
                entry.target.style.animation = "none";
                entry.target.style.opacity = 0;
            }
        }
    );
}
let observer = new IntersectionObserver(callback);

db.collection("blogs").get().then((blogs) => {

    blogs.forEach(blog => {
        if (blog.id != decodeURI(location.pathname.split("/").pop())) {
            createBlog(blog);
        }
    });


    const fadeItems = document.querySelectorAll('.animate');
    fadeItems.forEach(item => {
        console.log("adding " + fadeItems.length + " cards to the observer");
        observer.observe(item)
    });
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    
    <div class="post__card animate" data-fade="fade-in 2s">
        <div class="post__wrapper">
            <img src="${data.bannerImage}" class="blog-image" alt="">
            <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
            <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
            <a href="/${blog.id}" class="section__posts--card--button btn dark">read</a>
        </div>
    </div>
    
    `;
}