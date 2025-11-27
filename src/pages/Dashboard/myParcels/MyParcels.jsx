import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FiEdit } from 'react-icons/fi';
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['myParcels', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  
  });



  const handleParcelDelete = (id) => {
    console.log(id);
  }
    const handlePayment = async (parcel) => {
      const paymentInfo = {
    cost : parcel.cost,
    parcelId: parcel._id,
    SenderEmail: parcel.SenderEmail,
    parcelName: parcel.parcelName
  }
  const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
  console.log(res.data.url)
  window.location.assign(res.data.url)
    }

  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.delete(`/parcels/${id}`).then((res) => {
  //         console.log(res.data);
       

  //         if (res.data.deletedCount) {
  //           // refresh the data UI
  //              refetch();
  //           Swal.fire({
  //             title: 'Deleted!',
  //             text: 'Your parcel has been deleted.',
  //             icon: 'success',
  //           });
  //         }
  //       });
  //     }
  //   });
  
  return (
    <div>
      <h2>all of my parcels: {parcels.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>SenderEmail</th>
              <th>ReceiverEmail</th>
              <th>Time</th>
              <th>Payment</th>
              {/* <th>Delivery Status</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.SenderEmail}</td>
                <td>{parcel.ReceiverEmail}</td>
                <td>{parcel.createdAt}</td>
                <td>
                  {
                    parcel.paymentStatus === 'paid' ? 
                    <span className='text-green-400'>paid</span>
                    :
                      <button onClick={() => handlePayment(parcel)} className='btn btn-sm bg-[#caeb67]'>pay</button>

                    // <Link to={`/dashboard/payment/${parcel._id}`}>
                  
                    // </Link>
                  }
                </td>
                {/* <td>{parcel.deliveryStatus}</td> */}
                <td>
                  <button className="btn btn-square hover:bg-[#caeb67] tooltip tooltip-top" data-tip="View parcel">
                    <FaMagnifyingGlass></FaMagnifyingGlass>
                  </button>
                  <button className="btn btn-square hover:bg-[#caeb67] mx-2 tooltip tooltip-top" data-tip="Edit Parcel">
                    <FiEdit></FiEdit>
                  </button>
                  <button onClick={() => handleParcelDelete(parcel._id)} className="btn btn-square hover:bg-[#caeb67] tooltip tooltip-top" data-tip="Delete Parcel">
                    <FaTrashCan ></FaTrashCan>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
