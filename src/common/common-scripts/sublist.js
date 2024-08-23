const menu = document.querySelector("#menuList");
const toggleSublist = (e) => {
    const isActionBtn = e.target.closest("[data-acrList]");

    if (isActionBtn) {
        const allActiveItems = menu.querySelectorAll("[data-acrList].active");

        allActiveItems.forEach((item) => {
            if (item !== isActionBtn.closest("[data-acrList]")) {
                item.classList.remove("active");
            }
        });

        const currentItem = isActionBtn.closest("[data-acrList]");
        currentItem.classList.toggle("active");
    }
};

menu.addEventListener("click", toggleSublist);
