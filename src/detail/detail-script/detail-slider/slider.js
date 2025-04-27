import data from './data-slider.js'
import Creator from '../creator.js'
import styles from '../../detail-style/slider.module.css'
import {
    sliderParams,
    wrapperHiddenParams,
    sliderTrackParams,
    slideParams,
    slideTitleParams,
    slideSubtitleParams,
    slideDescriptionParams,
    slideArticleParams,
    slideArticleTitleParams,
    slideArticleListParams,
    slideArticleListItemParams,
    slideBtnParams,
    slideBtnTitleParams,
    listPaginationParams,
    paginationItemParams,
    paginationBtnParams,
    // paginationBtnActiveParams,
    wrapperArrowsParams,
    arrowLeftParams,
    arrowRightParams,
} from './slider-Params.js'
export default class Slider {
    sliderTrack = null
    constructor(data) {
        this.data = data
        this.slider = new Creator(sliderParams)
        this.creatorElements()
        this.creatorSlide()
        this.creatorPagination()
        this.creatorArrows()
    }

    creatorElements() {
        const wrapperHidden = new Creator(wrapperHiddenParams)
        this.sliderTrack = new Creator(sliderTrackParams)
        wrapperHidden.getElement().append(this.sliderTrack.getElement())
        this.slider.getElement().append(wrapperHidden.getElement())
    }

    creatorSlide() {
        this.data.forEach((item) => {
            const slide = new Creator(slideParams)

            if (item.title) {
                slideTitleParams.text = item.title
                const slideTitle = new Creator(slideTitleParams)
                slide.getElement().append(slideTitle.getElement())
            }
            if (item.subtitle) {
                slideSubtitleParams.text = item.subtitle
                const slideSubtitle = new Creator(slideSubtitleParams)
                slide.getElement().append(slideSubtitle.getElement())
            }
            if (item.descriptionFirst) {
                slideDescriptionParams.text = item.descriptionFirst
                const slideDescriptionFirst = new Creator(
                    slideDescriptionParams
                )
                slideDescriptionFirst
                    .getElement()
                    .classList.add(styles.slideDescriptionFirst)
                slide.getElement().append(slideDescriptionFirst.getElement())
            }
            if (item.descriptionSecond) {
                slideDescriptionParams.text = item.descriptionSecond
                const slideDescriptionSecond = new Creator(
                    slideDescriptionParams
                )
                slideDescriptionSecond
                    .getElement()
                    .classList.add(styles.slideDescriptionSecond)
                slide.getElement().append(slideDescriptionSecond.getElement())
            }
            if (item.list) {
                const wrapperList = new Creator(slideArticleParams)
                if (item.list.listTitle) {
                    slideArticleTitleParams.text = item.list.listTitle
                    const articleTitle = new Creator(slideArticleTitleParams)
                    wrapperList.getElement().append(articleTitle.getElement())
                }
                slide.getElement().append(wrapperList.getElement())

                const listItems = new Creator(slideArticleListParams)
                item.list.listItems.forEach((item) => {
                    slideArticleListItemParams.text = item
                    const articleListItem = new Creator(
                        slideArticleListItemParams
                    )
                    listItems.getElement().append(articleListItem.getElement())
                })
                wrapperList.getElement().append(listItems.getElement())
            }
            if (item.descriptionThird) {
                slideDescriptionParams.text = item.descriptionThird
                const slideDescriptionThird = new Creator(
                    slideDescriptionParams
                )
                slideDescriptionThird
                    .getElement()
                    .classList.add(styles.slideDescriptionThird)
                slide.getElement().append(slideDescriptionThird.getElement())
            }
            if (item.descriptionFourth) {
                slideDescriptionParams.text = item.descriptionFourth
                const slideDescriptionFourth = new Creator(
                    slideDescriptionParams
                )
                slideDescriptionFourth
                    .getElement()
                    .classList.add(styles.slideDescriptionFourth)
                slide.getElement().append(slideDescriptionFourth.getElement())
            }
            if (item.btn) {
                const slideBtn = new Creator(slideBtnParams)
                slideBtnTitleParams.text = item.btn.text
                const slideBtnTitle = new Creator(slideBtnTitleParams)
                slideBtn.getElement().append(slideBtnTitle.getElement())
                slide.getElement().append(slideBtn.getElement())
            }

            this.sliderTrack.getElement().append(slide.getElement())
        })
    }

    creatorPagination() {
        const listPagination = new Creator(listPaginationParams)
        this.slider.getElement().append(listPagination.getElement())
        this.data.forEach((item) => {
            const paginationItem = new Creator(paginationItemParams)
            listPagination.getElement().append(paginationItem.getElement())
            const paginationBtn = new Creator(paginationBtnParams)
            paginationItem.getElement().append(paginationBtn.getElement())
            if (item.subtitle) {
                paginationBtn.getElement().textContent = item.subtitle
            }
        })
    }
    creatorArrows() {
        const wrapperArrows = new Creator(wrapperArrowsParams)
        this.slider.getElement().append(wrapperArrows.getElement())
        const arrowLeft = new Creator(arrowLeftParams)
        const arrowRight = new Creator(arrowRightParams)
        wrapperArrows.getElement().append(arrowLeft.getElement())
        wrapperArrows.getElement().append(arrowRight.getElement())
    }
}

const sliderWrapper = document.getElementById('slider-wrapper')
const slider = new Slider(data)
sliderWrapper.append(slider.slider.getElement())
