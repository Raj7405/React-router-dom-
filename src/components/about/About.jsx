import React from 'react'
import { useLocation,useOutletContext } from 'react-router-dom'

function About() {
  // const location = useLocation()
  // console.log(location)
  let outletContext = useOutletContext()
  console.log(outletContext)
  return (
    <div className='text-2xl font-bold flex flex-col items-center gap-5'>About</div>
  )
}

export default About