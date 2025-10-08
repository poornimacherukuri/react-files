import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hook1_app from './Hook1_app.jsx'
import HookTask1App from './HookTask1app.jsx'
import Hook2App from './Hook2App.jsx'
import NewtaskApp from './NewtaskApp.jsx'
import Routing from './Routing.jsx'
import Products from './Products.jsx'
import ImageMechanism1 from './ImageMechanism1.jsx'
import ImageMechanism2 from './ImageMechanism2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Hook1_app/> */}
    {/* <HookTask1App/> */}
    {/* <Hook2App/> */}
    {/* <NewtaskApp/> */}
    {/* <Routing/> */}
    {/* <Products/> */}
    <ImageMechanism1/>
    <ImageMechanism2/>
  </StrictMode>,
)
