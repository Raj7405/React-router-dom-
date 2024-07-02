import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BigSpinner from './components/utilities/BigSpinner.jsx'
import { delayTime } from './components/function/delay.js'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'

const App = lazy(() => delayTime(import('./App.jsx')))  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>SoMetTing WeNT wROng!</div>}>
      <Suspense fallback={<BigSpinner/>}>
        <App/>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
)
