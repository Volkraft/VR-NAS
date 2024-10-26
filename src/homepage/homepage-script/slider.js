import styles from "../homepage-style/slider.module.css";

export default class Slider {
    constructor(htmlEl) {
        this.slider = htmlEl;
        this.sliderTrack = null;
        this.storageWidth = null;
        this.numberCurrentSlides = 0;
        this.countSlide = 0;
        this.creatorElements();
        this.setListener();
    }

    creatorElements = () => {
        this.slider.className = styles.slider;

        const wrapperHidden = document.createElement("div");
        wrapperHidden.className = styles.wrapperHidden;
        wrapperHidden.setAttribute("id", "wrapperHidden");

        this.sliderTrack = document.createElement("div");
        this.sliderTrack.className = styles.sliderTrack;
        this.sliderTrack.setAttribute("id", "sliderTrack");
        this.creatorSlide(this.sliderTrack);

        wrapperHidden.append(this.sliderTrack);
        this.slider.append(wrapperHidden);

        this.creatorPagination();
        this.creatorArrows();
    };

    creatorPagination = () => {
        const listPagination = document.createElement("ul");
        listPagination.className = styles.listPagination;

        for (let i = 0; i < this.countSlide; i++) {
            const paginationItem = document.createElement("li");
            paginationItem.className = styles.paginationItem;

            const paginationBtn = document.createElement("button");
            paginationBtn.className = styles.paginationBtn;
            paginationItem.append(paginationBtn);
            listPagination.append(paginationItem);
        }

        this.slider.append(listPagination);
    };

    creatorArrows = () => {
        const arrowLeft = document.createElement("button");
        arrowLeft.className = styles.arrow;
        arrowLeft.setAttribute("data-arrow", "left");

        const arrowRight = document.createElement("button");
        arrowRight.className = styles.arrow;
        arrowRight.setAttribute("data-arrow", "right");

        this.slider.prepend(arrowLeft);
        this.slider.append(arrowRight);
    };

    creatorSlide = () => {
        const slides = Array.from(this.slider.children);
        this.countSlide = slides.length;
        this.storageWidth = this.slider.children[0].offsetWidth;

        slides.forEach((slide) => {
            slide.classList.add(styles.slide);
            this.sliderTrack.append(slide);
        });
    };

    setListener = () => {
        this.slider.addEventListener("click", this.handlerEvent);
    };

    motion = () => {
        const currentMove = this.storageWidth * this.numberCurrentSlides;
        this.sliderTrack = document.querySelector("#sliderTrack");
        this.sliderTrack.style.transform = `translateX(-${currentMove}px)`;
    };

    handlerEvent = (e) => {
        const isArrowLeft = e.target.closest('[data-arrow="left"]');
        const isArrowRight = e.target.closest('[data-arrow="right"]');

        if (isArrowRight) {
            this.numberCurrentSlides++;
            this.motion();
        } else if (isArrowLeft) {
            this.numberCurrentSlides--;
            this.motion();
        }
    };
}
