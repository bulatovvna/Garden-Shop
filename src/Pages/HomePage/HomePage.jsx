import React from 'react'
import SaleBanner from './SaleBanner/SaleBanner'
import Catalog from './Catalog/Catalog'
import FirstSaleOff from './FirstSaleOff/FirstSaleOff'
import Sale from './Sale/Sale'

function HomePage() {
  return (
    <div>
      <SaleBanner/>
      <Catalog/>
      <FirstSaleOff/>
      <Sale/>
    </div>
  )
}

export default HomePage
