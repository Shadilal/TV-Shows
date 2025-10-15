import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'
function Root() {
  return (
    <div>
      <header className=' p-5'>
        <Header />
      </header>

      <Outlet />
      <Footer />
    </div>
  );
}

export default Root