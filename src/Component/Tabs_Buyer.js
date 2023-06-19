import React from 'react'
import { TabComponents,TabItem } from './TabComponent/Tabs'
import ProductPage from '../Pages/ProductPage'
import Category1 from '../Pages/Category1'
import Category2 from '../Pages/Category2'
import BuyerPage from '../Pages/BuyerPage'
const Tabs_Buyer = () => {
  return (
    <div>
      <TabComponents>
      
        <TabItem label='Electronics'>
            <BuyerPage/>
        </TabItem>
       
        <TabItem label="Cash Crops">
        <Category1/>
        </TabItem>
        <TabItem label="Vegetables">
          <Category2/>
        </TabItem>
      </TabComponents>
    </div>
  )
}

export default Tabs_Buyer