import * as _ from 'lodash'
import DrillContainerDirection from './drills/drill_container_direction'
import DrillContainerWrap from './drills/drill_container_wrap'
import DrillContainerCombo from './drills/drill_container_combo'
import DrillContainerJustifyContent from './drills/drill_container_justify_content'
import DrillContainerAlignItems from './drills/drill_container_align_items'

class DrillPicker {
    constructor() {
        this.drills = [new DrillContainerDirection(), new DrillContainerWrap(),
            new DrillContainerCombo(), new DrillContainerAlignItems(),
            new DrillContainerJustifyContent()
        ]
    }

    getDrill() {
        return _.shuffle(this.drills)[0]
    }
}

export default DrillPicker
