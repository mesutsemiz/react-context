import React, { useContext } from 'react'
import { GlbalContext } from '../Context/GlobalState'

const Header = () => {
  const {deger} = useContext(GlbalContext)
  return (
    <div  className='col-md-6'>
    <div className='alert alert-primary'>
        <h2>Context`ten gelen veri :{deger}</h2>
    </div>

    </div>
  )
}

export default Header