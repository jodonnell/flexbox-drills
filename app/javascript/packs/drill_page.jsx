import React from 'react'
import Header from './header'
import Grader from './grader'
import Editor from './editor'
import Answer from './answer'
import UserAnswer from './user_answer'
import ProblemPicker from './problem_picker'
import Success from './success'
import 'src/application.css'

class DrillPage extends React.Component {
    constructor(props) {
        super(props)
        this.problemPicker = new ProblemPicker()
        this.problem = this.problemPicker.getProblem()
        this.start = new Date()
        this.state = {isMatch: false, completion: null}
    }

    componentDidMount() {
        this.grader = new Grader()
    }

    onCodeChange() {
        this.grader.check().then(isMatch => {
            if (isMatch) {
                this.setState({isMatch: true, completion: ((new Date()) - this.start)})
                this.editor.blur()
            }
        })
    }

    nextDrill() {
        this.start = new Date()
        this.setState({isMatch: false, completion: null})
        this.problem = this.problemPicker.getProblem()
        this.editor.reset()
    }

    componentDidUpdate() {
        this.grader = new Grader()
    }

    render() {
        return (
            <div>
                {this.state.isMatch &&
                    <Success completionTime={this.state.completion} close={this.nextDrill.bind(this)}/>
                }
                <Header />
                <Editor ref={editor => this.editor = editor} onCodeChange={this.onCodeChange.bind(this)} />
                <UserAnswer containerStyle={this.problem.containerStyle()} childStyle={this.problem.childStyle()} />
                <Answer answerStyle={this.problem.answerStyle()} childStyle={this.problem.childStyle()} />
            </div>
        )
    }
}

export default DrillPage
