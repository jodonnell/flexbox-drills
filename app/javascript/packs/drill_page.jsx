import React from 'react'
import Header from './header'
import Grader from './grader'
import Editor from './editor'
import Answer from './answer'
import UserAnswer from './user_answer'
import ProblemPicker from './problem_picker'
import 'src/application.css'

class CssEntry extends React.Component {
    constructor(props) {
        super(props)
        this.problemPicker = new ProblemPicker()
        this.problem = this.problemPicker.getProblem()
    }

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
        return (
            <div>
                <Header />
                <Editor onCodeChange={this.onCodeChange.bind(this)} />
                <UserAnswer containerStyle={this.problem.containerStyle()} childStyle={this.problem.childStyle()} />
                <Answer answerStyle={this.problem.answerStyle()} childStyle={this.problem.childStyle()} />
            </div>
        )
    }
}

export default CssEntry
