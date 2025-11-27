import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  // console.log(regionsDuplicate)
  const regions = [...new Set(regionsDuplicate)];
  // console.log(regions)

  const districtByRegion = (regionFilter) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === regionFilter);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const RiderRegion = useWatch({ control, name: 'Region' });

  const handleRider = (data) => {
    console.log(data);
    axiosSecure.post('/riders', data)
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your application has been submitted. we will reach to you in 145 days',
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <h2 className="text-4xl font-bold text-green-400">Be a Rider</h2>

      <form onSubmit={handleSubmit(handleRider)} className="mt-6 p-4">
        {/* tow column  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* sender Details  */}
          {/* Rider name  */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Rider Details</h4>
            <label className="label">Rider Name</label>
            <input type="text" {...register('name')} defaultValue={user?.displayName} className="input w-full focus:outline-0" placeholder="Sender Name" />

            {/* sender Email    */}
            <label className="label">Rider Email</label>
            <input type="email" {...register('email')} defaultValue={user?.email} className="input w-full focus:outline-0" placeholder="Sender Email" />

            {/* sender region select  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Regions</legend>
              <select {...register('Region')} defaultValue="Pick a region" className="select">
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* rider region select districts  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Districts</legend>
              <select {...register('District')} defaultValue="Pick a district" className="select">
                <option disabled={true}>Pick a district</option>
                {districtByRegion(RiderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender address    */}
            <label className="label">Your Address</label>
            <input type="text" {...register('address')} className="input w-full focus:outline-0" placeholder=" Address" />
          </fieldset>
          {/* more Details  */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">More Details</h4>
            {/*  License   */}
            <label className="label">Driving License</label>
            <input type="text" {...register('license')} className="input w-full focus:outline-0" placeholder="Driving License" />
            {/*  NID    */}
            <label className="label">NID</label>
            <input type="number" {...register('nid')} className="input w-full focus:outline-0" placeholder="NID" />
            {/*  Number    */}
            <label className="label">Your Number</label>
            <input type="text" {...register('number')} className="input w-full focus:outline-0" placeholder=" Number" />

            {/* bike info */}
            <label className="label">Bike info</label>
            <input type="text" {...register('bike')} className="input w-full focus:outline-0" placeholder="Bike info" />
          </fieldset>
        </div>
        <input type="submit" className="btn mt-3 bg-[#caeb66] text-black" value="Apply as a Rider" />
      </form>
    </div>
  );
};

export default Rider;
