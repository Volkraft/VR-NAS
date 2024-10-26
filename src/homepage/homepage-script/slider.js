import styles from "../homepage-style/slider.module.css";

export default class Slider {
    constructor(htmlEl) {
        this.slider = htmlEl;
        this.sliderTrack = null;
        this.paginationList = null;
        this.storageWidth = null;
        this.countSlide = 0;
        this.numberCurrentSlides = 0;
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
        this.paginationList = document.createElement("ul");
        this.paginationList.className = styles.listPagination;

        for (let i = 0; i < this.countSlide; i++) {
            const paginationItem = document.createElement("li");

            const paginationBtn = document.createElement("button");
            paginationBtn.className = styles.paginationBtn;

            if (i === 0) {
                paginationBtn.classList.add(styles.activeBtn);
            }

            paginationItem.append(paginationBtn);
            this.paginationList.append(paginationItem);
        }

        this.slider.append(this.paginationList);
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

    btnControllStyle = () => {
        const activeBtn = this.paginationList.querySelector(
            `.${styles.activeBtn}`
        );

        if (activeBtn) {
            activeBtn.classList.remove(styles.activeBtn);
        }

        const buttons = Array.from(
            this.paginationList.querySelectorAll("button")
        );
        if (buttons[this.numberCurrentSlides]) {
            buttons[this.numberCurrentSlides].classList.add(styles.activeBtn);
        }
    };

    choiceOfDirection = (direction) => {
        if (direction === "right") {
            this.numberCurrentSlides =
                this.numberCurrentSlides < this.countSlide - 1
                    ? this.numberCurrentSlides + 1
                    : 0;
        } else if (direction === "left") {
            this.numberCurrentSlides =
                this.numberCurrentSlides > 0
                    ? this.numberCurrentSlides - 1
                    : this.countSlide - 1;
        }
    };

    motion = () => {
        const currentMove = this.storageWidth * this.numberCurrentSlides;
        this.sliderTrack.style.transform = `translateX(-${currentMove}px)`;
        this.btnControllStyle();
    };

    handlerEvent = (e) => {
        const isArrowLeft = e.target.closest('[data-arrow="left"]');
        const isArrowRight = e.target.closest('[data-arrow="right"]');

        if (isArrowRight) {
            this.choiceOfDirection("right");
        } else if (isArrowLeft) {
            this.choiceOfDirection("left");
        }
        this.motion();
    };
}
