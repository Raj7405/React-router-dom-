import React from 'react'

function Error403() {
  return (
    <div className='text-center'>
        <h1 className='text-9xl'>403</h1>
        <p>Requested data is not found or API rate limit exceeded</p>
    </div>
  )
}

export default Error403