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
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");

lightbox.addEventListener("click", function () {
    if (event.target != lightboxImage) {
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
});

closeLightbox.addEventListener("click", function () {
    lightbox.classList.add("hide");
    lightbox.classList.remove("show");
});

const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach((element) => {
    element.querySelector("span").addEventListener("click", function () {
        lightbox.classList.add("show");
        lightbox.classList.remove("hide");
        lightboxImage.src = element.querySelector("img").getAttribute("src");
    });
});

// customer-slider

let itemsSlider = document.querySelector(".cusotmer-slider").children;
let nextSlide = document.querySelector(".next");
let prevSlide = document.querySelector(".prev");
let totalItems = itemsSlider.length;
let index = 0;

nextSlide.onclick = function () {
    next("next");
};

prevSlide.onclick = function () {
    next("prev");
};

function next(direction) {
    if (direction == "next") {
        index++;
        if (index == totalItems) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalItems - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < itemsSlider.length; i++) {
        itemsSlider[i].classList.remove("active");
    }

    itemsSlider[index].classList.add("active");
}
