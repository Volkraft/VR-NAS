import styles from '../homepage-style/slider.module.css'

export default class Slider {
    constructor(htmlEl) {
        this.slider = htmlEl
        this.sliderTrack = null
        this.paginationList = null
        this.arrayPaginationBtns = null
        this.storageWidth = null
        this.countSlide = 0
        this.numberCurrentSlides = 0
        this.startPoint = 0
        this.endPoint = 0
        this.creatorElements()
        this.setListener()
        setInterval(() => this.autoplay(), 6000)
    }

    creatorElements = () => {
        this.slider.className = styles.slider

        const wrapperHidden = document.createElement('div')
        wrapperHidden.className = styles.wrapperHidden
        wrapperHidden.setAttribute('id', 'wrapperHidden')

        this.sliderTrack = document.createElement('div')
        this.sliderTrack.className = styles.sliderTrack
        this.sliderTrack.setAttribute('id', 'sliderTrack')
        this.creatorSlide(this.sliderTrack)

        wrapperHidden.append(this.sliderTrack)
        this.slider.append(wrapperHidden)

        this.creatorPagination()
        // this.creatorArrows();
    }

    creatorPagination = () => {
        this.paginationList = document.createElement('ul')
        this.paginationList.className = styles.listPagination

        for (let i = 0; i < this.countSlide; i++) {
            const paginationItem = document.createElement('li')

            const paginationBtn = document.createElement('button')
            paginationBtn.className = styles.paginationBtn
            paginationBtn.setAttribute('data-button-controll', '')

            if (i === 0) {
                paginationBtn.classList.add(styles.activeBtn)
            }

            paginationItem.append(paginationBtn)
            this.paginationList.append(paginationItem)
            this.arrayPaginationBtns =
                this.paginationList.querySelectorAll('button')
        }

        this.slider.append(this.paginationList)
    }

    // creatorArrows = () => {
    //     const arrowLeft = document.createElement("button");
    //     arrowLeft.className = styles.arrow;
    //     arrowLeft.setAttribute("data-arrow", "left");

    //     const arrowRight = document.createElement("button");
    //     arrowRight.className = styles.arrow;
    //     arrowRight.setAttribute("data-arrow", "right");

    //     this.slider.prepend(arrowLeft);
    //     this.slider.append(arrowRight);
    // };

    creatorSlide = () => {
        const slides = Array.from(this.slider.children)
        this.countSlide = slides.length
        this.storageWidth = this.slider.children[0].offsetWidth

        slides.forEach((slide) => {
            slide.classList.add(styles.slide)
            this.sliderTrack.append(slide)
        })
    }

    setListener = () => {
        this.slider.addEventListener('click', this.handlerEvent)
        this.slider.addEventListener('mousedown', this.createStartingPoint)
        this.slider.addEventListener('mouseup', this.createEndingPoint)
        this.slider.addEventListener('touchstart', this.createStartingPoint)
        this.slider.addEventListener('touchend', this.createEndingPoint)
    }

    btnControllStyle = () => {
        const activeBtn = this.paginationList.querySelector(
            `.${styles.activeBtn}`
        )

        if (activeBtn) {
            activeBtn.classList.remove(styles.activeBtn)
        }

        this.arrayPaginationBtns = Array.from(
            this.paginationList.querySelectorAll('button')
        )

        if (this.arrayPaginationBtns[this.numberCurrentSlides]) {
            this.arrayPaginationBtns[this.numberCurrentSlides].classList.add(
                styles.activeBtn
            )
        }
    }

    increaseCurrentCounter = () => {
        this.numberCurrentSlides =
            this.numberCurrentSlides < this.countSlide - 1
                ? this.numberCurrentSlides + 1
                : 0
    }

    decreaseCurrentCounter = () => {
        this.numberCurrentSlides =
            this.numberCurrentSlides > 0
                ? this.numberCurrentSlides - 1
                : this.countSlide - 1
    }

    choiceOfDirection = (direction) => {
        if (direction === 'right') {
            this.increaseCurrentCounter()
        } else if (direction === 'left') {
            this.decreaseCurrentCounter()
        }
    }

    autoplay = () => {
        this.increaseCurrentCounter()
        this.motion()
    }

    motion = () => {
        const currentMove = this.storageWidth * this.numberCurrentSlides
        this.sliderTrack.style.transform = `translateX(-${currentMove}px)`
        this.btnControllStyle()
    }

    handlerEvent = (e) => {
        const isArrowLeft = e.target.closest('[data-arrow="left"]')
        const isArrowRight = e.target.closest('[data-arrow="right"]')

        const isControllButton = e.target.closest('[data-button-controll]')

        if (isControllButton) {
            const indexCurrentBtnControll = Array.from(
                this.arrayPaginationBtns
            ).indexOf(isControllButton)
            this.numberCurrentSlides = indexCurrentBtnControll
        }

        if (isArrowRight) {
            this.choiceOfDirection('right')
        } else if (isArrowLeft) {
            this.choiceOfDirection('left')
        }

        this.motion()
    }

    handlerMove = () => {
        const differenceMoves = this.startPoint - this.endPoint
        const minMove = 40

        if (Math.abs(differenceMoves) >= minMove) {
            if (differenceMoves > 0) {
                this.choiceOfDirection('right')
            } else {
                this.choiceOfDirection('left')
            }
        }

        this.motion()
    }

    createStartingPoint = (e) => {
        const point = e.type.includes('mouse')
            ? e.clientX
            : e.touches[0].clientX
        this.startPoint = point
        this.endPoint = this.startPoint
    }

    createEndingPoint = (e) => {
        const point = e.type.includes('mouse')
            ? e.clientX
            : e.changedTouches[0].clientX
        this.endPoint = point
        this.handlerMove()
    }
}
