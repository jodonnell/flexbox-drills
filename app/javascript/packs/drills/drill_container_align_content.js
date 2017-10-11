import * as _ from 'lodash'
import DrillContainerDefaults from './drill_container_defaults'

class DrillContainerAlignContent extends DrillContainerDefaults {
    containerStyle() {
        const style = Object.assign({}, super.containerStyle())
        style.height = 600
        return style
    }


    answerStyle() {
        const direction = _.shuffle(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'])[0]

        return Object.assign(
            {
                display: 'flex',
                alignContent: direction,
                flexWrap: 'wrap'
            },
            this.containerStyle())
    }
}

export default DrillContainerAlignContent
