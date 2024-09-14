import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

// older version of react
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )