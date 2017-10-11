import React from 'react'
import PropTypes from 'prop-types'

class Answer extends React.Component {
    render() {
        return (
            <div style={{marginTop: 30}}>
                <span style={{color: '#fdfdfd', fontSize: 28}}>Match Me!</span>

                <div style={this.props.drill.answerStyle()} className="answer-container">
                    {[...Array(this.props.drill.numChildren())].map((x, i) => {
                        return <div key={i} style={this.props.drill.childStyle(i)} className="answer-child" dangerouslySetInnerHTML={{__html: this.props.drill.content(i)}}></div>
                    })}
                </div>
            </div>
        )
    }
}

Answer.propTypes = {
    drill: PropTypes.object.isRequired,
}

export default Answer
