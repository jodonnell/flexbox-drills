import React from 'react'
const CodeMirror = require('react-codemirror')
require('codemirror/mode/css/css')

class CssEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = { code: '.container {\n  display:flex;\n}' }
    }

    updateCode(newCode) {
	this.setState({
	    code: newCode,
	})
    }

    render() {
        const options = {
	    lineNumbers: true,
            mode: 'css'
        }

        const containerStyle = {
            backgroundColor: 'beige',
            border: '3px solid black',
            marginTop: 30
        }

        const childStyle = {
            backgroundColor: 'red',
            width: 100,
            height: 100,
            border: '3px solid green',
            fontSize: 50,
            color: 'white',
            lineHeight: '100px',
            textAlign: 'center'
        }


        const answerStyle = Object.assign({display: 'flex',
                                           flexDirection: 'row-reverse'
                                          }, containerStyle)


        return (
            <div>
              <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />

              <style>
                {this.state.code}
              </style>
              <div style={containerStyle} className="container">
                {[...Array(19)].map((x, i) => {
                    return <div key={i} style={childStyle} className="child">{i + 1}</div>
                })}
              </div>

              <div>
                Match Me!

                <div style={answerStyle} className="answer-container">
                  {[...Array(19)].map((x, i) => {
                      return <div key={i} style={childStyle} className="answer-child">{i + 1}</div>
                  })}
                </div>
              </div>
            </div>
        )
    }
}

export default CssEntry
