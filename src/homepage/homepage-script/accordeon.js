// const btnTitle = document.querySelectorAll('[data-name="accordeon-title"]');

// const { default: log } = require("video.js/dist/types/utils/log");

// btnTitle.forEach((item) => {
// item.addEventListener("click", (event) => {
//     console.log(event);
//     const accordItem = event.currentTarget.closest(
//         "accord-point"
//     );
//     accordItem
//         .querySelector(".accord-point-decrpit")
//         .classList.toggle("hidden");
//     event.currentTarget.classList.toggle(
//         "choouse-us__accord-point-title--active"
//     );
// });
// });

// 1. найти список, отследить клик
// 2. проверить клик является accord-point
// 3. найти внутри target descrpit и класс

const accordList = document.querySelector("#accordList");

const motionAccord = (event) => {
    const isListItem = event.target.closest("[data-item]");
    if (isListItem) {
        isListItem.classList.toggle("active");
    }
};

accordList.addEventListener("click", motionAccord);

const headerAccrList = document.querySelector("#menuList");

const headerMotionAccord = (event) => {
    const isHeaderListItem = event.target.closest("[data-acrList]");
    if (isHeaderListItem) {
        isHeaderListItem.classList.toggle("active");
    }
};

headerAccrList.addEventListener("click", headerMotionAccord);
