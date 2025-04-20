export default class Creator {
    constructor(objectParams) {
        this.params = objectParams
        this.htmlEl = this.createElement(this.params.tagName)
        if (this.htmlEl) {
            this.setStyle()
            this.setText()
            this.setAttributes()
        }
    }

    setStyle() {
        if (this.params.styles) {
            this.htmlEl.classList.add(this.params.styles)
        }
    }

    createElement(tagName) {
        if (tagName) {
            const element = document.createElement(tagName)
            return element
        }
    }

    getElement() {
        return this.htmlEl
    }

    setText() {
        if (this.params.text) {
            this.htmlEl.textContent = this.params.text
        }
    }
    setAttributes() {
        if (this.params.attributes) {
            for (const key in this.params.attributes) {
                this.htmlEl.setAttribute(key, this.params.attributes[key])
            }
        }
    }
}
