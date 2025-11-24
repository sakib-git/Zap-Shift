import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import Authimg from '../assets/authImage.png'

const AuthLayout = () => {
  return (
    <div className='max-w-[1400px] mx-auto '>
      <Logo></Logo>
      <div className='flex max-md:flex-col mt-20 max-md:px-6'>
        <div className='flex-1 '>
          <Outlet></Outlet>
        </div>
        <div className='flex-1 bg-[#fafdf0] '>
          <img src={Authimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;