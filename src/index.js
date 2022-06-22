import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

ReactDOM.render(<Suspense fallback={null}><App /></Suspense>, document.getElementById('root'))
