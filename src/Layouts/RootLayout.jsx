import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar></Navbar>
     <div className='flex-1 '>
       <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;