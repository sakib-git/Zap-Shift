import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AssignRiders = () => {
  const axiosSecure = useAxiosSecure()
  const {data: parcels = []} = useQuery({
    queryKey: ['parcels', 'pending-pickup'],
    queryFn: async () => {
      const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
      return res.data
    }
  })
  return (
    <div>
      <h2 className='text-green-400 text-5xl'>Assign Riders: {parcels.length} </h2>

            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Time</th>
                    <th>TdrackingId</th>
                    <th>Pickup District</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {parcels.map((parcel, i) => (
                    <tr key={parcel._id}>
                      <th>{i + 1}</th>
                      <td>{parcel.parcelName}</td>
                      <td>{parcel.cost}</td>
                      <td>{parcel.createdAt}</td>
    
                      <td>{parcel.trackingId}</td>
                      <td>{parcel.senderDistrict}</td>
                      <td>
                        <button className="btn  bg-[#caeb67] tooltip tooltip-top" data-tip="View parcel">
                          Assign Rider
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

export default AssignRiders;