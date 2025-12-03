import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['parcels', user.email, 'driver_assigned'],
    queryFn: async () => {
      // const res = await axiosSecure.get(``);
      const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`);
      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = { deliveryStatus: status };

    let message = `parcel status is updated with ${status.split('-').join(' ')}`
    console.log(message)

    axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl">Parcels pending picup: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>RiderEmail</th>
              <th>Confirm</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.riderEmail}</td>
                <td>
                  {parcel.deliveryStatus === 'driver_assigned' ? 
                    <>
                      <button onClick={() => handleDeliveryStatusUpdate(parcel, 'rider_arriving')} className="btn bg-green-600 text-amber-50 mr-2">
                        Accept
                      </button>
                      <button className="btn bg-red-600 text-amber-50">Reject</button>
                    </>
                    : <span className='bg-green-400 p-2 rounded-md text-white font-bold'>Delivery accepted</span>
                  }
                </td>
                <td>
                  <button onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_picked_up')} className="btn bg-green-600 text-amber-50 mr-2">
                       Mark as picked up
                      </button>
                  <button onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_delivered')} className="btn bg-green-600 text-amber-50 mr-2">
                       Mark as Delivered
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

export default AssignedDeliveries;
