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
    let dot1 = document.querySelector(".dot1")
    let dot2 = document.querySelector(".dot2")
    let dot3 = document.querySelector(".dot3")
    let dot4 = document.querySelector(".dot4")
    let dot5 = document.querySelector(".dot5")
    let tdot1 = document.querySelector(".dot-text1")
    let tdot2 = document.querySelector(".dot-text2")
    let tdot3 = document.querySelector(".dot-text3")
    let tdot4 = document.querySelector(".dot-text4")
    let tdot5 = document.querySelector(".dot-text5")

    dot1.addEventListener("mouseover", ()=> {
        dot1.style.width = "1.5rem";
        dot1.style.borderStyle = "solid";
        dot1.style.borderColor = "white"
        tdot1.style.opacity = 100;
    });
    dot1.addEventListener("mouseout", ()=> {
        dot1.style.width = "1rem";
        dot1.style.borderStyle = "none";
        tdot1.style.opacity = 0;
    });

    dot2.addEventListener("mouseover", ()=> {
        dot2.style.width = "1.5rem";
        dot2.style.borderStyle = "solid";
        dot2.style.borderColor = "white"
        tdot2.style.opacity = 100;
    });
    dot2.addEventListener("mouseout", ()=> {
        dot2.style.width = "1rem";
        dot2.style.borderStyle = "none";
        tdot2.style.opacity = 0;
    });

    dot3.addEventListener("mouseover", ()=> {
        dot3.style.width = "1.5rem";
        dot3.style.borderStyle = "solid";
        dot3.style.borderColor = "white"
        tdot3.style.opacity = 100;
    });
    dot3.addEventListener("mouseout", ()=> {
        dot3.style.width = "1rem";
        dot3.style.borderStyle = "none";
        tdot3.style.opacity = 0;
    });

    dot4.addEventListener("mouseover", ()=> {
        dot4.style.width = "1.5rem";
        dot4.style.borderStyle = "solid";
        dot4.style.borderColor = "white"
        tdot4.style.opacity = 100;
    });
    dot4.addEventListener("mouseout", ()=> {
        dot4.style.width = "1rem";
        dot4.style.borderStyle = "none";
        tdot4.style.opacity = 0;
    });

    dot5.addEventListener("mouseover", ()=> {
        dot5.style.width = "1.5rem";
        dot5.style.borderStyle = "solid";
        dot5.style.borderColor = "white"
        tdot5.style.opacity = 100;
    });
    dot5.addEventListener("mouseout", ()=> {
        dot5.style.width = "1rem";
        dot5.style.borderStyle = "none";
        tdot5.style.opacity = 0;
    });

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