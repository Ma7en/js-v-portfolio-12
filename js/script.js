

/*
==============================================
==============================================
*/

/* ====== start preloader ====== */

window.addEventListener("load", function() {

    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout( function() {

        document.querySelector(".preloader").style.display = "none";
    },1000)
});

/* ====== end preloader ====== */

/*
==============================================
==============================================
*/

/* ====== start toggler ====== */

const   navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn) 


function asideSectionTogglerBtn() {

    aside.classList.toggle("open");

    navTogglerBtn.classList.toggle("open");

    for (let i =0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }

}


/* ====== end toggler ====== */

/*
==============================================
==============================================
*/

/* ====== start aside navbar ====== */

const   nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;


for (let i = 0; i < totalNavList; i++) {

    const a = navList[i].querySelector("a");

    a.addEventListener("click", function(){

        // remove back section class 
        removeBackSectionClass();

        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {

                // add back section class
                addBackSectionClass(j)
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");

        showSection(this);

        if (window.innerWidth < 1200) {

            asideSectionTogglerBtn();
        }
    })
}


function removeBackSectionClass () {

    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}


function addBackSectionClass(num) {
    allSection[num].classList.add("back-section");
}

function showSection (element) {

    // remove class active from all section
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];

    document.querySelector("#" + target).classList.add("active");

}


// 
function updataNav(element) {
    
    for (let i = 0; i < totalNavList; i++) {

        navList[i].querySelector("a").classList.remove("active");

        const target = element.getAttribute("href").split("#")[1];

        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {

            navList[i].querySelector("a").classList.add("active");
        }
    }
}


// hire me = lest to work

document.querySelector(".hire-me").addEventListener("click", function(){

    const sectionIndex = this.getAttribute("data-section-index");

    showSection(this);

    updataNav(this);

    removeBackSectionClass();

    addBackSectionClass(sectionIndex);

})


/* ====== end aside navbar ====== */

/*
==============================================
==============================================
*/

/* ====== start date year ======*/

window.addEventListener("load", () => {
    let dateYear = document.querySelector(".dateYear");
    let newDate = new Date();
    dateYear.innerHTML = newDate.getFullYear();
});


/* ====== end date year ======*/

/*
==============================================
==============================================
*/

/* ====== start portfolio item ====== */

const   filterContainer = document.querySelector(".portfolio-filter"),
        filterBtns = filterContainer.children,
        totalFilterBtn = filterBtns.length,
        portfolioItems = document.querySelectorAll(".portfolio-item"),
        totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++ ) {
    filterBtns[i].addEventListener("click", function() {

        filterContainer.querySelector(".active").classList.remove("active");

        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        for (let k = 0; k < totalPortfolioItem; k++) {

            if (filterValue === portfolioItems[k].getAttribute("data-category")) {

                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            } else {

                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }

            if (filterValue === "all") {

                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }

    })

}

/* ====== end portfolio item ====== */

/*
==============================================
==============================================
*/

/* ====== start portfolio lightbox  ====== */

const   lightbox = document.querySelector(".lightbox"),
        lightboxImg = lightbox.querySelector(".lightbox-img"),
        lightboxClose = lightbox.querySelector(".lightbox-close"),
        lightboxCloseI = lightbox.querySelector(".lightbox-close i"),
        lightboxText = lightbox.querySelector(".caption-text"),
        lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for(let i = 0; i < totalPortfolioItem; i++) {

    portfolioItems[i].addEventListener("click", function() {

        itemIndex = i;

        changeItem();

        toggleLightbox();
    })
}

function nextItem () {

    if (itemIndex === totalPortfolioItem - 1) {

        itemIndex = 0;
    } else {

        itemIndex++;
    }

    changeItem();
}

function prevItem () {

    if (itemIndex == 0) {

        itemIndex = totalPortfolioItem - 1;
    } else {

        itemIndex--;
    } 

    changeItem();
}

function toggleLightbox ( ) {

    lightbox.classList.toggle("open");
}

function changeItem () {

    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");

    lightboxImg.src = imgSrc;

    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;

    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}



// close lightbox
lightbox.addEventListener("click", function(event) {

    if (event.target === lightboxClose || event.target === lightbox) {

        toggleLightbox();
    } else if (event.target === lightboxCloseI) {
        toggleLightbox();
    }
})

/* ====== end portfolio lightbox  ====== */

/*
==============================================
==============================================
*/




















// ================================================
// ================================================
// ================================================
/*


// function toggleLightbox () {
//     toggleLightbox.classList.toggle("open");
// }


// function changeItem () {
//     imgSrc = portfolioItems[itemIndex].querySelector("portfolio-img img").getAttribute("src");
//     lightboxImg.src = imgSrc;
//     lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
//     lightboxCounter.innerHTML = (itemIndex + 1) + "of" + totalPortfolioItem;
// }


// close Lightbox 
// lightbox.addEventListener("click", function(event){

//     if (event.target === lightboxClose || event.target === lightbox ) {

//         toggleLightbox();
//     }
// })


*/







