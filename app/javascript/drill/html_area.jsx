import React from 'react'
import PropTypes from 'prop-types'

class HtmlArea extends React.Component {
    render() {
        return (
            <div style={this.props.containerStyle} className={this.props.containerClassName}>
                {[...Array(this.props.drill.numChildren())].map((x, i) => {
                    return <div key={i} style={this.props.childStyle(i)} className={this.props.childClassName} dangerouslySetInnerHTML={{__html: this.props.drill.content(i)}}></div>
                })}
            </div>
        )
    }
}

HtmlArea.propTypes = {
    drill: PropTypes.object.isRequired,
    containerClassName: PropTypes.string.isRequired,
    childClassName: PropTypes.string.isRequired,
    containerStyle: PropTypes.object.isRequired,
    childStyle: PropTypes.func.isRequired,
}

export default HtmlArea
