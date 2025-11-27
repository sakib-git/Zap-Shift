import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
  const { user } = useAuth();
  // const axiosSucre = useAxiosSecure()
  const axiosSecure = useAxiosSecure();;
  const { data: paymets = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?.email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-5xl">Payment History : {paymets.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>

              <th>ReceiverEmail</th>
              <th>transactionId</th>
              <th>Time</th>
              <th>Payment</th>
              {/* <th>Delivery Status</th>
              <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {paymets.map((payment, i) => (
              <tr key={payment._id}>
                <th>{i + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.amount}</td>

                <td>{payment.customerEmail}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.paidAt}</td>

                <td>{payment.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
