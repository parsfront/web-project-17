const tabMenu = document.querySelector("#tab-btn").children;

for (let i = 0; i < tabMenu.length; i++) {
    tabMenu[i].addEventListener("click", function () {
        for (let j = 0; j < tabMenu.length; j++) {
            tabMenu[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}
