


// =======================================
// style switcher

const   links = document.querySelectorAll(".alternate-style"),
        totalLinks = links.length;

function setActiveStyle(color) {
    for (let i = 0; i < totalLinks; i++) {

        if (color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled", "true");
        }

    }
}



// body skin (dark and light)

const   bodySkin = document.querySelectorAll(".body-skin"),
        totalBodySkin = bodySkin.length;

for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener("change", function() {
        if (this.value === "dark" ) {
            document.body.className = "dark";
        } else {
            document.body.className = "";
        }
    })
}


let styleSwitcher = document.querySelector(".style-switcher");
let toggleStyleSwitcher = document.querySelector(".toggle-style-switcher");
let mainContentS = document.querySelectorAll(".main-content .section");
let mainContent = document.querySelector(".main-content");
let Aside = document.querySelector(".aside");
let navS = document.querySelectorAll(".nav li a");



toggleStyleSwitcher.addEventListener("click", () => {

    styleSwitcher.classList.toggle("open");
});


for(let i = 0; i < mainContentS.length; i++) {
    mainContentS[i].addEventListener("scroll", () => {
        styleSwitcher.classList.remove("open");
    })
}

for(let n = 0; n < navS.length; n++) {
    navS[n].addEventListener("click", () => {
        styleSwitcher.classList.remove("open");
    });
}

mainContent.addEventListener("click", () => {
    styleSwitcher.classList.remove("open");
});

Aside.addEventListener("click", () => {
    styleSwitcher.classList.remove("open");
});



// style switcher
// =======================================





