import childStyle from './red_numbered_boxes'
import DrillContainerDirection from './drill_container_direction'
import DrillContainerWrap from './drill_container_wrap'

class DrillContainerCombo {
    constructor() {
        this.direction = new DrillContainerDirection()
        this.wrap = new DrillContainerWrap()
    }

    containerStyle() {
        return {
            border: '3px solid black',
            marginTop: 30
        }
    }

    childStyle() {
        return childStyle
    }

    answerStyle() {
        return Object.assign(
            this.wrap.answerStyle(),
            this.direction.answerStyle(),
            this.containerStyle())
    }
}

export default DrillContainerCombo
