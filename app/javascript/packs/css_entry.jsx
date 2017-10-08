import React from 'react'
import Header from './header'
const CodeMirror = require('react-codemirror')
const html2canvas = require('html2canvas')
require('codemirror/mode/css/css')
require('src/application.css')

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

    check() {
        const answerCanvas = html2canvas(document.querySelector('.answer-container'))
        const userCanvas = html2canvas(document.querySelector('.container'))

        Promise.all([answerCanvas, userCanvas]).then(values => {
            if (values[0].toDataURL() === values[1].toDataURL())
                console.log('MATCH')
            else
                console.log('NO MATCH')
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
              <Header />
              <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />

              <style>
                {this.state.code}
              </style>

              <button onClick={this.check.bind(this)}>Test</button>

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
