import * as _ from 'lodash'
import DrillContainerDefaults from './drill_container_defaults'

class DrillContainerAlignItems extends DrillContainerDefaults {
    answerStyle() {
        const direction = _.shuffle(['flex-start', 'flex-end', 'center', 'baseline'])[0]

        return Object.assign(
            {
                display: 'flex',
                alignItems: direction
            },
            this.containerStyle())
    }
}

export default DrillContainerAlignItems
