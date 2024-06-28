import React from 'react'
import DashBoard from './DashBoard'

function ProductPage() {
  return (
    <div className='flex flex-col items-center gap-5'>
      <h2 className='text-2xl font-bold'>Feature Page</h2>
      <DashBoard/>  
    </div>
  )
}

export default ProductPage