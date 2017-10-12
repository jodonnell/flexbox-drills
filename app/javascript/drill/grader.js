import * as html2canvas from 'html2canvas'

class Grader {
    constructor() {
        this.answerImage = null
        html2canvas(document.querySelector('.answer-container')).then(canvas => {
            this.answerImage = canvas.toDataURL()
        })
    }

    check(callback) {
        return html2canvas(document.querySelector('.container')).then(canvas => {
            resemble(canvas.toDataURL()).compareTo(this.answerImage).onComplete(function(data){
                if (data.rawMisMatchPercentage < 1) {
                    callback()
                }
            })

            return canvas.toDataURL() === this.answerImage
        })
    }
}

export default Grader
