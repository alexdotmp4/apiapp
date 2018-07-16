import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-center bb b--silver'>
      <Link to="/be">
        <div className='pa2'>
          <img src="/images/flag-belgium.jpg" />
        </div>
      </Link>
      <Link to="/br">
        <div className='pa2'>
          <img src="/images/flag-brazil.jpg" />
        </div>
      </Link>
      <Link to="/hr">
        <div className='pa2'>
          <img src="/images/flag-croatia.jpg" />
        </div>
      </Link>
      <Link to="/gb">
        <div className='pa2'>
          <img src="/images/flag-england.jpg" />
        </div>
      </Link>
      <Link to="/fr">
        <div className='pa2'>
          <img src="/images/flag-france.jpg" />
        </div>
      </Link>
      <Link to="/ru">
        <div className='pa2'>
          <img src="/images/flag-russia.jpg" />
        </div>
      </Link>
      <Link to="/se">
        <div className='pa2'>
          <img src="/images/flag-sweden.jpg" />
        </div>
      </Link>
      <Link to="/uy">
        <div className='pa2'>
          <img src="/images/flag-uruguay.jpg" />
        </div>
      </Link>
    </nav>
  )
}

export default Navbar
