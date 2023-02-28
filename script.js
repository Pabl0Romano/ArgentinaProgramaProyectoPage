const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el))

const toTop = document.querySelector(".totop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active")
    }
})

window.addEventListener("load", () => {
    let js = document.querySelector(".js");
    let html = document.querySelector(".html");
    let css = document.querySelector(".css");
    let react = document.querySelector(".react");

    js.addEventListener("mouseover", ()=> {
        js.style.color = "#F0DB4F"
    });
    js.addEventListener("mouseout", ()=> {
        js.style.color = "white"
    });

    html.addEventListener("mouseover", ()=> {
        html.style.color = "#e34c26"
    });
    html.addEventListener("mouseout", ()=> {
        html.style.color = "white"
    });

    css.addEventListener("mouseover", ()=> {
        css.style.color = "#264de4"
    });
    css.addEventListener("mouseout", ()=> {
        css.style.color = "white"
    });

    react.addEventListener("mouseover", ()=> {
        react.style.color = "#61DBFB"
    });
    react.addEventListener("mouseout", ()=> {
        react.style.color = "white"
    });
});