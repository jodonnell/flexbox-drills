import DrillContainerDefaults from './drill_container_defaults'

class DrillChildOrder extends DrillContainerDefaults {
    childAnswerStyle(i) {
        if (i === 2) {
            return Object.assign(
                {
                    order: '99'
                },
                this.childStyle())
        }
        return this.childStyle()
    }

    answerStyle() {
        return Object.assign(
            {
                display: 'flex',
            },
            this.containerStyle())
    }
}

export default DrillChildOrder
