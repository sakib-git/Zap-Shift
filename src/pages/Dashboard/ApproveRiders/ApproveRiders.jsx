import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import {  useQuery } from '@tanstack/react-query';

const ApproveRiders = () => {
  const axiosSscure = useAxiosSecure()
  const {data: riders = []} = useQuery({
    queryKey: ['riders', 'pending'],
    queryFn: async () => {
      const res = await axiosSscure.get('/riders')
      return res.data;
    }
  })
 

  return (
    <div>
      <h1>Riders Pending Approval: {riders.length}   </h1>
     
    </div>
  );
};

export default ApproveRiders;