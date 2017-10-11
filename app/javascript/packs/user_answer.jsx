import React from 'react'
import PropTypes from 'prop-types'

class UserAnswer extends React.Component {
    render() {
        return (
            <div style={this.props.drill.containerStyle()} className="container">
                {[...Array(this.props.drill.numChildren())].map((x, i) => {
                    return <div key={i} style={this.props.drill.childStyle(i)} className="child" dangerouslySetInnerHTML={{__html: this.props.drill.content(i)}}></div>
                })}
            </div>
        )
    }
}

UserAnswer.propTypes = {
    drill: PropTypes.object.isRequired,
}

export default UserAnswer
