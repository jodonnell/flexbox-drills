import * as _ from 'lodash'
import DrillContainerDefaults from './drill_container_defaults'

class DrillContainerWrap extends DrillContainerDefaults{
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
