import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import UseContext from './All-Hooks/UseContext/UseContext.jsx'


createRoot(document.getElementById('root')).render(
  <UseContext>
    <StrictMode>
      <App />
    </StrictMode>,
  </UseContext>


)
