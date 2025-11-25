import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const serviceCenters = useLoaderData();
  // console.log(serviceCenters)
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  // console.log(regionsDuplicate)
  const regions = [...new Set(regionsDuplicate)];
  // console.log(regions)
  const SenderRegion = useWatch({control, name :'senderRegion'});

 const receiverRegion = useWatch({control, name : 'reciverRegion'})
  const districtByRegion = (regionFilter) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === regionFilter);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };


  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parecelType === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    // console.log(sameDistrict)

    const parcelWeight = parseFloat(data.parcelWeight)
    let cost = 0;
    if(isDocument){
      cost = isSameDistrict ? 60 : 80;
    }
    else{
      if(parcelWeight < 3){
        cost = isSameDistrict ? 110 : 150;
      }
      else{
       const minCharge = isSameDistrict ? 110 : 150;
       const extraWeight = parcelWeight - 3;
       const extraCharge = isSameDistrict ? extraWeight * 40 :
       extraWeight * 40 + 40;
       cost = minCharge + extraCharge
      }
    }
    console.log('cost', cost)
    Swal.fire({
  title: "Please confirm the price",
  text: `You will be charged! ${cost} taka`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, take it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  };
  return (
    <div className="max-w-[1400px] mx-auto">
      <h2 className="text-5xl font-bold my-2">Send A Parcel</h2>
      <p className="font-bold">Enter your parcel details</p>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-6 p-4">
        {/* document parcel type */}
        <div>
          <label className="label mr-4">
            <input type="radio" {...register('parecelType')} value="document" className="radio" defaultChecked />
            Document
          </label>

          <label className="label">
            <input type="radio" {...register('parecelType')} value="non-document" className="radio" />
            Non-Document
          </label>
        </div>

        {/* parcel inofo : name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input type="text" {...register('parcelName')} className="input w-full focus:outline-0" placeholder="Parcel Name" />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input type="number" {...register('parcelWeight')} className="input w-full focus:outline-0" placeholder="Parcel Name" />
          </fieldset>
        </div>
        {/* tow column  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* sender Details  */}
          {/* sender name  */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            <label className="label">Sender Name</label>
            <input type="text" {...register('SenderName')} className="input w-full focus:outline-0" placeholder="Sender Name" />

            {/* sender Email    */}
            <label className="label">Sender Email</label>
            <input type="email" {...register('SenderEmail')} className="input w-full focus:outline-0" placeholder="Sender Email" />
            {/* sender Number    */}
            <label className="label">Sender Number</label>
            <input type="text" {...register('SenderNumber')} className="input w-full focus:outline-0" placeholder="Sender Number" />
            {/* sender region select  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
                <option  disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender region select districts  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Districts</legend>
              <select {...register('senderDistrict')} defaultValue="Pick a district" className="select">
                <option  disabled={true}>Pick a district</option>
                {districtByRegion(SenderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender address    */}
            <label className="label">Sender Address</label>
            <input type="text" {...register('SenderAddress')} className="input w-full focus:outline-0" placeholder="Sender Address" />
          </fieldset>
          {/* receiver Details  */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            {/* Receiver Name    */}
            <label className="label">Receiver Name</label>
            <input type="text" {...register('ReceiverName')} className="input w-full focus:outline-0" placeholder="Receiver Name" />
            {/* Receiver Email    */}
            <label className="label">Receiver Email</label>
            <input type="email" {...register('ReceiverEmail')} className="input w-full focus:outline-0" placeholder="Receiver Email" />
            {/* sender Number    */}
            <label className="label">Receiver Number</label>
            <input type="text" {...register('ReceiverNumber')} className="input w-full focus:outline-0" placeholder="Receiver Number" />
             {/* Receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select {...register('reciverRegion')} defaultValue="Pick a region" className="select">
                <option  disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              </fieldset>
                        {/* receiver region select districts  */}
           <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Districts</legend>
              <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select">
                <option  disabled={true}>Pick a district</option>
               {
                districtByRegion(receiverRegion).map((d,i) => 
                  <option key={i} value={d}>{d}</option>
                )
               }
              </select>
            </fieldset> 
            
   

            {/* Receiver address    */}
            <label className="label">Receiver Address</label>
            <input type="text" {...register('ReceiverAddress')} className="input w-full focus:outline-0" placeholder="Sender Receiver" />
          </fieldset>
        </div>
        <input type="submit" className="btn bg-[#caeb66] text-black" value="Send Parcel" />
      </form>
    </div>
  );
};

export default SendParcel;
