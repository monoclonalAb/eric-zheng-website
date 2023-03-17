const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } /*else {
            entry.target.classList.remove('show');
        }*/
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
    output.innerHTML = "Scroll event fired!";
    setTimeout(() => {
        output.innerHTML = "Waiting on scroll events...";
    }, 1000);
});
