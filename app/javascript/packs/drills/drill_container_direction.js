import * as _ from 'lodash'
import DrillContainerDefaults from './drill_container_defaults'

class DrillContainerDirection extends DrillContainerDefaults {
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
