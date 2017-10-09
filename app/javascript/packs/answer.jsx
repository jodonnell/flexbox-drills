import React from 'react'
import PropTypes from 'prop-types'

class Answer extends React.Component {
    render() {
        return (
            <div>
                Match Me!

                <div style={this.props.answerStyle} className="answer-container">
                    {[...Array(19)].map((x, i) => {
                        return <div key={i} style={this.props.childStyle} className="answer-child">{i + 1}</div>
                    })}
                </div>
            </div>
        )
    }
}

Answer.propTypes = {
    answerStyle: PropTypes.object.isRequired,
    childStyle: PropTypes.object.isRequired
}

export default Answer
