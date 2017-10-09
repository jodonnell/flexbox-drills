import React from 'react'
import PropTypes from 'prop-types'

class UserAnswer extends React.Component {
    render() {
        return (
            <div style={this.props.containerStyle} className="container">
                {[...Array(19)].map((x, i) => {
                    return <div key={i} style={this.props.childStyle} className="child">{i + 1}</div>
                })}
            </div>
        )
    }
}

UserAnswer.propTypes = {
    containerStyle: PropTypes.object.isRequired,
    childStyle: PropTypes.object.isRequired,
}

export default UserAnswer
