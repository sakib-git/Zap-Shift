import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import Forbidden from '../Components/Forbidden/Forbidden';
import Loading from '../Components/Logo/loading/loading';

const RiderRoute = ({children}) => {
  
   const { loading, user} = useAuth();
  const {role, roleLoading} = useRole()


  if(loading || !user || roleLoading){
    return <Loading></Loading>
  }

  if(role !== 'rider'){
    return <Forbidden></Forbidden>
  }
  return children
  
};

export default RiderRoute;