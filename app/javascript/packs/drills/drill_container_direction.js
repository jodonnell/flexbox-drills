import * as _ from 'lodash'

class DrillContainerDirection {
    containerStyle() {
        return {
            border: '3px solid black',
            marginTop: 30
        }
    }

    childStyle() {
        return {
            backgroundColor: 'red',
            width: 100,
            height: 100,
            border: '3px solid green',
            fontSize: 50,
            color: 'white',
            lineHeight: '100px',
            textAlign: 'center'
        }
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
