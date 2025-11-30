import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashCan, FaUserCheck } from 'react-icons/fa6';
import { IoPersonRemove } from 'react-icons/io5';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
  const axiosSscure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ['riders', 'pending'],
    queryFn: async () => {
      const res = await axiosSscure.get('/riders');
      return res.data;
    },
  });


  const updateRiderStatus = (rider, status) => {

        const updateInfo = {status: status, email: rider.email}
    axiosSscure.patch(`/riders/${rider._id}`, updateInfo)
    .then(res => {
      if(res.data.modifiedCount){
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
  
  }
  const handleApproval = (rider) => {
 updateRiderStatus(rider, 'approved')
  };

  const handleRejection = rider => {
updateRiderStatus(rider, 'rejected')
  }

 const handleDelete = id => {
  Swal.fire({
    title: "Are you sure?",
    text: "This rider will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSscure.delete(`/riders/${id}`)
        .then(res => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Rider deleted successfully!",
              timer: 2000,
              showConfirmButton: false
            });
          }
        })
    }
  });
};


  return (
    <div>
      <h1 className='text-4xl font-bold'>Riders Pending Approval: {riders.length} </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Application Status</th>
              <th>District</th>
              <th>Work Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, i) => (
              <tr key={rider._id}>
                <th>{i + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>
                 <p className={`${rider.status === 'approved' ? 'text-green-600' : 'text-red-500'}`}>{rider.status}</p>
                  </td>
                <td>{rider.District}</td>
                 <td>{rider.workStatus}</td>
                <td>
                  <button
                  onClick={() => handleApproval(rider)}
                  className="btn btn-square hover:bg-[#caeb67] tooltip tooltip-top" data-tip="Accept">
                    <FaUserCheck></FaUserCheck>
                  </button>
                  <button
                  onClick={() => handleRejection(rider)}
                  className="btn btn-square hover:bg-[#caeb67] mx-2 tooltip tooltip-top" data-tip="Reject">
                    <IoPersonRemove></IoPersonRemove>
                  </button>
                  <button 
                  onClick={() => handleDelete(rider._id)}
                  className="btn btn-square hover:bg-[#caeb67] tooltip tooltip-top" data-tip="Delete">
                    <FaTrashCan></FaTrashCan>
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

export default ApproveRiders;
