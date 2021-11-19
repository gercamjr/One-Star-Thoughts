const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

auth.onAuthStateChanged((user) => {
    if (user) {
        //user is logged in
        navLinks.innerHTML += `<li><a href="/admin">Dashboard</a></li>
        <li><a class="login-button" href="#" onclick="logoutUser()">Logout</a></li>`
    } else {
        navLinks.innerHTML += `<li><a class="login-button" href="/admin">Login</a></li>`
    }
})



hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});