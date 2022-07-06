const tabMenu = document.querySelector("#tab-btn").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < tabMenu.length; i++) {
    tabMenu[i].addEventListener("click", function () {
        for (let j = 0; j < tabMenu.length; j++) {
            tabMenu[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
    });
}

// lightbox

const closeLightbox = document.querySelector(".close-lightbox");

closeLightbox.addEventListener("click", function () {
    document.querySelector(".lightbox").style.display = "none";
});
