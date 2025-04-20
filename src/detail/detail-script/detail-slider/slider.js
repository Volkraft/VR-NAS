// import data from './data-slider.js'
import Creator from '../creator.js'
import {
    sliderParams,
    wrapperHiddenParams,
    sliderTrackParams,
    slideParams,
} from './slider-Params.js'
export default class Slider {
    constructor(data) {
        this.data = data
        this.slider = new Creator(sliderParams)
        this.creatorElements()
    }

    creatorElements() {
        const wrapperHidden = new Creator(wrapperHiddenParams)
        const sliderTrack = new Creator(sliderTrackParams)
        wrapperHidden.append(sliderTrack)
        this.slider.append(wrapperHidden)
    }

    creatorSlide() {
        const slide = new Creator(slideParams)
        this.sliderTrack.append(slide)
    }
}
