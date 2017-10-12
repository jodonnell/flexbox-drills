import React from 'react'
import PropTypes from 'prop-types'

class Success extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        scroll(0, 0)
        document.body.classList.add('modal-open')
    }

    componentWillUnmount() {
        document.body.classList.remove('modal-open')
    }

    render() {
        return (
            <div className="grading-modal" onClick={this.props.close}>
                <div className="info">
                    <div className="grade">
                      A+
                    </div>
                    <div className="time">
                        {this.props.completionTime}s
                    </div>
                </div>
            </div>
        )
    }
}

Success.propTypes = {
    completionTime: PropTypes.number.isRequired,
    close: PropTypes.func.isRequired
}

export default Success
