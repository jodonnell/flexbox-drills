const html2canvas = require('html2canvas')

class Grader {
    constructor() {
        this.answerImage = null
        html2canvas(document.querySelector('.answer-container')).then(canvas => {
            this.answerImage = canvas.toDataURL()
        })
    }

    check() {
        return html2canvas(document.querySelector('.container')).then(canvas => {
            return canvas.toDataURL() === this.answerImage
        })
    }
}

export default Grader
