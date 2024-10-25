import styles from "../homepage-style/slider.module.css";

export default class Slider {
    constructor(htmlEl) {
        this.slider = htmlEl;
        this.storageWidth;
        this.numberCurrentSlides = 0;
        this.countSlide;
        this.creatorElements();
        this.setListener();
    }

    creatorElements() {
        this.slider.className = styles.slider;

        const wrapperHidden = document.createElement("div");
        wrapperHidden.className = styles.wrapperHidden;
        wrapperHidden.setAttribute("id", "wrapperHidden");

        const sliderTrack = document.createElement("div");
        sliderTrack.className = styles.sliderTrack;
        sliderTrack.setAttribute("id", "sliderTrack");
        this.creatorSlide(sliderTrack);

        wrapperHidden.append(sliderTrack);
        this.slider.append(wrapperHidden);

        this.creatorPagination();
        this.creatorArrows();
    }

    creatorPagination() {
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
    }

    creatorArrows() {
        const arrowLeft = document.createElement("button");
        arrowLeft.className = styles.arrow;
        arrowLeft.setAttribute("data-arrow", "left");

        const arrowRight = document.createElement("button");
        arrowRight.className = styles.arrow;
        arrowRight.setAttribute("data-arrow", "right");

        this.slider.prepend(arrowLeft);
        this.slider.append(arrowRight);
    }

    creatorSlide(sliderTrack) {
        const slides = Array.from(this.slider.children);
        this.countSlide = slides.length;
        this.storageWidth = this.slider.children[0].offsetWidth;

        slides.forEach((slide) => {
            slide.classList.add(styles.slide);
            sliderTrack.append(slide);
        });
    }

    setListener() {
        const sliderEl = document.querySelector("#slider");
        sliderEl.addEventListener("click", this.handlerEvent);
    }
    motion = () => {
        const currentMove = this.storageWidth * this.numberCurrentSlides;
        const sliderTrack = document.querySelector("#sliderTrack");
        sliderTrack.style.transform = `translateX(-${currentMove}px)`;
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
