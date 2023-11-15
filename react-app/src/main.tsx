import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './components//Button/Button.module.css';
import './components/Alert/Alert.module.css';
import './components/FavoriteIcon/FavoriteIcon.module.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
