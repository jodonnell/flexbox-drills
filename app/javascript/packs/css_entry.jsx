import React from 'react'
import Header from './header'
import Grader from './grader'
import Editor from './editor'
import Answer from './answer'
import UserAnswer from './user_answer'
import 'src/application.css'

class CssEntry extends React.Component {
    componentDidMount() {
        this.grader = new Grader()
    }


    onCodeChange() {
        this.grader.check().then(isMatch => {
            if (isMatch) {
                alert('YA')
            }
        })
    }

    render() {
        const containerStyle = {
            backgroundColor: 'beige',
            border: '3px solid black',
            marginTop: 30
        }

        const childStyle = {
            backgroundColor: 'red',
            width: 100,
            height: 100,
            border: '3px solid green',
            fontSize: 50,
            color: 'white',
            lineHeight: '100px',
            textAlign: 'center'
        }

        const answerStyle = Object.assign(
            {
                display: 'flex',
                flexDirection: 'row-reverse'
            },
            containerStyle)

        return (
            <div>
                <Header />
                <Editor onCodeChange={this.onCodeChange.bind(this)} />
                <UserAnswer containerStyle={containerStyle} childStyle={childStyle} />
                <Answer answerStyle={answerStyle} childStyle={childStyle} />
            </div>
        )
    }
}

export default CssEntry
