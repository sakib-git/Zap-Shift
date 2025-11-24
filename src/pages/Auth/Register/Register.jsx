import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocilaLogin from '../SocialLogin/SocilaLogin';

const Register = () => {
  const {registerUser} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    // console.log('after register',data)
    console.log('after register',data.photo[0])
    registerUser(data.email, data.password)
    .then(result => {
      console.log(result.user)
      // update user profile
      
    })
   
    .catch(error => {
      console.log(error)
    })

  }
  return (
    <div className='max-w-[500px] bg-white shadow p-10'>
      <form onSubmit={handleSubmit(handleRegistration)} >
        <h2 className='text-3xl font-bold text-center'>Create an Account</h2>
        <p className='text-center'>Register with ZapShift</p>
        <fieldset className="fieldset">

          {/* Name  */}
          <label className="label">Name</label>
          <input type="text" {...register('name', {required:true})} className="input focus:outline-none w-full " placeholder="Your name" />
          {errors.name?.type === 'required' &&
           <p className='text-sm text-red-600'>Name is required</p>}

          {/* image photo */}
          <label className="label">photo</label>
          <input type="file" {...register('photo', {required:true})} className="file-input w-full" placeholder="Your photo" />
          {errors.photo?.type === 'required' &&
           <p className='text-sm text-red-600'>photo is required</p>}


          {/* Email  */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true})} className="input focus:outline-none w-full " placeholder="Email" />
          {errors.email?.type === 'required' &&
           <p className='text-sm text-red-600'>Email is required</p>}

          {/* password  */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {required:true, minLength: 6})} className="input focus:outline-none w-full" placeholder="Password" />
          {
            errors.password?.type === 'required' &&
            <p className='text-sm text-red-600'>password is required</p>
          }
          {
            errors.password?.type === 'minLength' && 
            <p className='text-sm text-red-600'> password must be 6 characters or longer</p>
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-[#caeb66] mt-4">Register</button>
        </fieldset>
         <p>Already have an account<Link to='/login' className='underline text-blue-500'> login</Link></p>
      </form>
      <SocilaLogin></SocilaLogin>
    </div>
  );
};

export default Register;
