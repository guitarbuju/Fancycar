
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import mainRouter from '../src/routing/mainRouter.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router= {mainRouter}>
    <App />
  </RouterProvider>,
)
