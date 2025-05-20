import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import SpecialityMenu from '../components/SpecialityMenu';
import About from './About';

const Appointment = () => {

  const { docId } = useParams()
  console.log(docId)
  const { doctors, currencySymbol } = useContext(AppContext)

  const [docInfo, setdocInfo] = useState(null)


  useEffect(() => {
    if (doctors && docId) {
      const docInfo = doctors.find(doc => doc._id === docId);
      setdocInfo(docInfo);
      console.log(docInfo);
    }
  }, [doctors, docId]);

  return docInfo && (
    <div>
      {/* --------- doctor details ---------- */}

      <div className='flex flex-col sm:flex-row gap-4' >
        <div >
          <img className='bg-primary w-full rounded-lg sm:max-w-72' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 sm:mt-0 mt-[-80px]'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" /> </p>
          <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
            <p>{docInfo.degree} - {docInfo.Speciality} </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/* ----------- doctors About ----------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium mt-3 text-gray-900'>About <img src={assets.info_icon} alt="" /> </p>
            <p className='text-lg text-gray-500 ma-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          {/* ----------- doctors fee ----------- */}
          <div className='mt-4'>
            <p>Appointment fee: <span className='font-bold'>{currencySymbol}{docInfo.fees}</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment