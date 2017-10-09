import React from 'react'
import PropTypes from 'prop-types'
const CodeMirror = require('react-codemirror')
require('codemirror/mode/css/css')

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { code: '.container {\n  display:flex;\n}' }
    }

    updateCode(newCode) {
        this.setState({
            code: newCode,
        })

        window.clearTimeout(this.interval)

        this.interval = setTimeout(() => {
            this.props.onCodeChange()
        }, 400)
    }

    render() {
        const options = {
            lineNumbers: true,
            mode: 'css'
        }

        return (
            <div>
                <style>
                    {this.state.code}
                </style>


                <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
            </div>
        )
    }
}

Editor.propTypes = {
    onCodeChange: PropTypes.func.isRequired,
}

export default Editor
