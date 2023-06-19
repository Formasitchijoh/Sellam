import React from 'react'
import { TabComponents,TabItem } from './TabComponent/Tabs'
import ProductPage from '../Pages/ProductPage'
import Category1 from '../Pages/Category1'
import Category2 from '../Pages/Category2'
const Tabs = () => {
  return (
    <div>
      <TabComponents>
      
        <TabItem label='My Products'>
        <Category1/>

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

export default Tabs