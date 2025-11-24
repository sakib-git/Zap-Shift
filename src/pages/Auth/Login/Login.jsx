import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import SocilaLogin from '../SocialLogin/SocilaLogin';

const Login = () => {
  const navigate = useNavigate()
  const {signInUser} = useAuth()
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleLogin = (data) => {
    // console.log('login data', data)
    signInUser(data.email, data.password)
    .then(result => {
      console.log(result.user)
    })
    //  .then( () => {
    //   navigate('/')
      
    // })
    .catch(error => {
      console.log(error)
      // alert(error)

    })
    
  }
  return (
    <div className='max-w-[500px] bg-white shadow p-10'>
      <form onSubmit={handleSubmit(handleLogin)} >
        <h2 className='text-3xl font-bold text-center'>Welcome Back</h2>
        <p className='text-center'>Login with ZapShift</p>
        <fieldset className="fieldset">
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
          <button className="btn bg-[#caeb66] mt-4">Log in</button>
        </fieldset>
        <p>New to zap shift <Link to='/register' className='underline text-blue-500'>Register</Link></p>
      </form>
      <SocilaLogin></SocilaLogin>
    </div>
  );
};

export default Login;