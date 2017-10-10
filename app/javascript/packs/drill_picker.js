import * as _ from 'lodash'
import DrillContainerDirection from './drills/drill_container_direction'
import DrillContainerWrap from './drills/drill_container_wrap'
import DrillContainerCombo from './drills/drill_container_combo'

class DrillPicker {
    constructor() {
        this.drills = [new DrillContainerDirection(), new DrillContainerWrap(),
            new DrillContainerCombo()
        ]
    }

    getDrill() {
        return _.shuffle(this.drills)[0]
    }
}

export default DrillPicker
