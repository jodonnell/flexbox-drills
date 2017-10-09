class Problem2 {
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
        return Object.assign(
            {
                display: 'flex',
                flexDirection: 'column'
            },
            this.containerStyle())
    }
}

export default Problem2
