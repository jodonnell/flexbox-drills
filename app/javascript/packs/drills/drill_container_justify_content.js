import * as _ from 'lodash'
import DrillContainerDefaults from './drill_container_defaults'

class DrillContainerJustifyContent extends DrillContainerDefaults {
    childStyle() {
        const style = Object.assign({}, super.childStyle())
        style.width = 100
        return style
    }


    answerStyle() {
        const direction = _.shuffle(['flex-end', 'center', 'space-between', 'space-around', 'space-evenly'])[0]

        return Object.assign(
            {
                display: 'flex',
                justifyContent: direction
            },
            this.containerStyle())
    }

    numChildren() {
        return 6
    }
}

export default DrillContainerJustifyContent
