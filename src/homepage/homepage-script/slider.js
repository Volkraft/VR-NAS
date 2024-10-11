export default class Slider {
    constructor(htmlEl) {
        this.slider = htmlEl;
        this.creatorElements();
        this.countSlide;
    }

    creatorElements() {
        const wrapperHidden = document.createElement("div");
        wrapperHidden.classList.add("wrapperHidden");
        wrapperHidden.setAttribute("id", "wrapperHidden");

        const sliderTrack = document.createElement("div");
        sliderTrack.classList.add("sliderTrack");
        sliderTrack.setAttribute("id", "sliderTrack");
        this.creatorSlide(sliderTrack);

        wrapperHidden.append(sliderTrack);
        this.slider.append(wrapperHidden);

        this.creatorPagination();
        this.creatorArrows();
    }

    creatorPagination() {
        const listPagination = document.createElement("ul");
        listPagination.classList.add("listPagination");

        for (let i = 0; i < this.countSlide; i++) {
            const paginationItem = document.createElement("li");
            paginationItem.classList.add("paginationItem");

            const paginationBtn = document.createElement("button");
            paginationBtn.classList.add("paginationBtn");
            paginationItem.append(paginationBtn);
            listPagination.append(paginationItem);
        }

        this.slider.append(listPagination);
    }

    creatorArrows() {
        const arrowLeft = document.createElement("button");
        arrowLeft.className = "arrow arrowLeft";

        const arrowRight = document.createElement("button");
        arrowRight.className = "arrow arrowRight";

        this.slider.prepend(arrowLeft);
        this.slider.append(arrowRight);
    }

    creatorSlide(sliderTrack) {
        const slides = Array.from(this.slider.children);
        this.countSlide = slides.length;

        slides.forEach((slide) => {
            sliderTrack.append(slide);
        });
    }
}
