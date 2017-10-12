import React from 'react'
import PropTypes from 'prop-types'
import HtmlArea from './html_area'

class Answer extends React.Component {
    render() {
        return (
            <div style={{marginTop: 30}}>
                <span style={{color: '#fdfdfd', fontSize: 28}}>Match Me!</span>
                <HtmlArea drill={this.props.drill} containerClassName="answer-container" childClassName="answer-child" childStyle={this.props.drill.childAnswerStyle.bind(this.props.drill)} containerStyle={this.props.drill.answerStyle()} />
            </div>
        )
    }
}

Answer.propTypes = {
    drill: PropTypes.object.isRequired,
}

export default Answer
