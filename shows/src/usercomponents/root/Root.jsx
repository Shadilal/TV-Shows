import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <div>
      <header className=' p-5'>
        <Header />
      </header>

      <Outlet />
    </div>
  );
}

export default Root