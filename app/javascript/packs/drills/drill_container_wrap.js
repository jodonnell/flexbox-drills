import * as _ from 'lodash'
import childStyle from './red_numbered_boxes'

class DrillContainerWrap {
    containerStyle() {
        return {
            border: '3px solid black',
        }
    }

    childStyle() {
        return childStyle
    }

    answerStyle() {
        const wrap = _.shuffle(['wrap', 'wrap-reverse'])[0]
        return Object.assign(
            {
                display: 'flex',
                flexWrap: wrap
            },
            this.containerStyle())
    }
}

export default DrillContainerWrap
