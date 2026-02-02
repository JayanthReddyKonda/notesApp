import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import {BrowserRouter} from 'react-router'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Toaster />
    <App />  
  </BrowserRouter>
)
