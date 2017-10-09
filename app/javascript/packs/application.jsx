import React from 'react'
import { render } from 'react-dom'
import DrillPage from './drill_page'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.body.appendChild(document.createElement('div'))
    render(<DrillPage />, container)
})
