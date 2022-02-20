let ui = new firebaseui.auth.AuthUI(auth);

let login = document.querySelector('.login');

const blogSection = document.querySelector('.dashboard__cards');

auth.onAuthStateChanged((user) => {
    if (user) {
        login.style.display = "none";
        getUserWrittenBlogs();

    } else {
        setupLoginButton();
    }

})

const setupLoginButton = () => {
    ui.start("#loginUI", {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectURL) {
                login.style.display = "none";
                console.log(authResult);
                return false;
            }
        },
        signInFlow: "popup",
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
    })
}

setupLoginButton();

// fetch blogs written by one star
const getUserWrittenBlogs = () => {
    db.collection("blogs").get().then((blogs) => {
        blogs.forEach((blog) => {
            createBlog(blog);
        })

    }).catch((error) => {
        console.log("Error getting blogs");
    })
}

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="post__card--dashboard">
        <div class="post__wrapper--dashboard">
            <img src="${data.bannerImage}" class="blog-image" alt="">
            <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
            <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
            <a href="/${blog.id}" class="section__posts--card--button btn dark">read</a>
        
        <a href="/${blog.id}/editor" class="section__posts--card--button btn grey">edit</a>
        <a href="#" onclick="deleteBlog('${blog.id}')" class="section__posts--card--button btn danger">delete</a>
        </div>
        </div>
    `;
}

const deleteBlog = (id) => {
    db.collection("blogs").doc(id).delete().then(() => {
            location.reload();
        })
        .catch((error) => {
            console.log("Error deleting the blog");
        })
}