import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashCan, FaUserCheck, FaUserShield } from 'react-icons/fa6';
import { IoPersonRemove } from 'react-icons/io5';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchAdmin, setSearchAdmin] = useState('')

  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users', searchAdmin],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchAdmin=${searchAdmin}`);
      return res.data;
    },
  });

  const hadnleMakeUser = (user) => {
    const roleInfo = { role: 'admin' };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.displayName} marked as an Admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: 'user' };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.displayName} removed from Admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl text-green-500 font-bold"> Users Management: {users.length}</h2>


      <div className="py-5 text-center">
        <label className="input outline-none focus:outline-none focus:ring-0 focus:border-transparent ">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
          onChange={(e) => setSearchAdmin(e.target.value)}
          type="search" name="location" className="grow" placeholder="Search" />
        </label>
      </div>


      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Others Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === 'admin' ? (
                    <button onClick={() => handleRemoveAdmin(user)} className="btn bg-red-400">
                      <FiShieldOff></FiShieldOff>
                    </button>
                  ) : (
                    <button onClick={() => hadnleMakeUser(user)} className="btn bg-green-400">
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>

                <td>
                  <button
                    // onClick={() => handleApproval(rider)}
                    className="btn btn-square hover:bg-[#caeb67] tooltip tooltip-top"
                    data-tip="Accept"
                  >
                    <FaUserCheck></FaUserCheck>
                  </button>
                  <button
                    // onClick={() => handleRejection(rider)}
                    className="btn btn-square hover:bg-[#caeb67] mx-2 tooltip tooltip-top"
                    data-tip="Reject"
                  >
                    <IoPersonRemove></IoPersonRemove>
                  </button>
                  <button className="btn btn-square hover:bg-[#caeb67] tooltip tooltip-top" data-tip="Delete">
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

export default UsersManagement;
