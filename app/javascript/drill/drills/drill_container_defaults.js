import childStyle from './red_numbered_boxes'
import wackyContent from './wacky_content'

class DrillContainerDefaults {
    containerStyle() {
        return {
            border: '3px solid black',
        }
    }

    numChildren() {
        return 19
    }

    childStyle() {
        return childStyle
    }

    content(i) {
        return wackyContent[i]
    }

    childAnswerStyle() {
        return this.childStyle()
    }
}

export default DrillContainerDefaults
