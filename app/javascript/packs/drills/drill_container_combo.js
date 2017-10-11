import DrillContainerDirection from './drill_container_direction'
import DrillContainerWrap from './drill_container_wrap'
import DrillContainerDefaults from './drill_container_defaults'

class DrillContainerCombo extends DrillContainerDefaults {
    constructor() {
        super()
        this.direction = new DrillContainerDirection()
        this.wrap = new DrillContainerWrap()
    }

    answerStyle() {
        return Object.assign(
            this.wrap.answerStyle(),
            this.direction.answerStyle(),
            this.containerStyle())
    }
}

export default DrillContainerCombo
