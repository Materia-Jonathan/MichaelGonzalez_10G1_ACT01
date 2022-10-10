import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import IconMenu from './IconMenu'
import MenuApp from './MenuApp'
import GaleryArticulos from './GaleryArticulos'
import TableArticulos from './TableArticulos'
import PaginationArticulos from './PaginationArticulos'
import Cards from './Cards'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuApp />
    {/* <GaleryArticulos /> */}
    {/* <TableArticulos /> */}
    <PaginationArticulos />
  </React.StrictMode>
)
