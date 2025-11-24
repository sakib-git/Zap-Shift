import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/Authcontext';


const useAuth = () => {
  const authInfo = useContext(AuthContext)
  return authInfo
};

export default useAuth;