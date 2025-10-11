import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <div>
      <header className='border'>
        <Header />
      </header>

      <Outlet />
    </div>
  );
}

export default Root