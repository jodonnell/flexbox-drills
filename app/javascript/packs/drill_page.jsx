import React from 'react'
import Header from './header'
import Grader from './grader'
import Editor from './editor'
import Answer from './answer'
import UserAnswer from './user_answer'
import DrillPicker from './drill_picker'
import Success from './success'
import 'src/application.css'

class DrillPage extends React.Component {
    constructor(props) {
        super(props)
        this.drillPicker = new DrillPicker()
        this.drill = this.drillPicker.getDrill()
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
        this.drill = this.drillPicker.getDrill()
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
                <UserAnswer containerStyle={this.drill.containerStyle()} childStyle={this.drill.childStyle()} />
                <Answer answerStyle={this.drill.answerStyle()} childStyle={this.drill.childStyle()} />
            </div>
        )
    }
}

export default DrillPage
