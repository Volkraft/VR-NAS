import styles from "../homepage-style/slider.module.css";

export default class Slider {
    constructor(htmlEl) {
        this.slider = htmlEl;
        this.creatorElements();
        this.countSlide;
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

        const arrowRight = document.createElement("button");
        arrowRight.className = styles.arrow;

        this.slider.prepend(arrowLeft);
        this.slider.append(arrowRight);
    }

    creatorSlide(sliderTrack) {
        const slides = Array.from(this.slider.children);
        this.countSlide = slides.length;

        slides.forEach((slide) => {
            slide.className = styles.slide;
            sliderTrack.append(slide);
        });
    }
}
