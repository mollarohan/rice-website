// ===============================
// RICE Website - script.js
// ===============================

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";
    }else{
        header.style.boxShadow="none";
    }
});

// Fade Animation
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("fade-up");
}
});
});

document.querySelectorAll("section").forEach(sec=>{
observer.observe(sec);
});

// Back To Top Button
const topBtn=document.createElement("a");

topBtn.innerHTML="↑";

topBtn.href="#";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.addEventListener("click",e=>{
e.preventDefault();

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// Loading
window.onload=function(){

document.body.style.opacity="1";

}

document.body.style.opacity="0";

document.body.style.transition=".8s";