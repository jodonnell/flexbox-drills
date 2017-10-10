import * as _ from 'lodash'
import childStyle from './red_numbered_boxes'

class DrillContainerDirection {
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
        const direction = _.shuffle(['row-reverse', 'column', 'column-reverse'])[0]

        return Object.assign(
            {
                display: 'flex',
                flexDirection: direction
            },
            this.containerStyle())
    }
}

export default DrillContainerDirection
