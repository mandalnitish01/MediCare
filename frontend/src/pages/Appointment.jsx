import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import SpecialityMenu from '../components/SpecialityMenu';
import About from './About';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {

  const { docId } = useParams()
  console.log(docId)
  const { doctors, currencySymbol } = useContext(AppContext)
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


  const [docInfo, setdocInfo] = useState(null)
  const [docSlots, setdocSlots] = useState([])
  const [slotIndex, setslotIndex] = useState(0)
  const [slotTime, setslotTime] = useState('')

  // ✅ Fixed getAvailableSlots function
  const getAvailableSlots = () => {
    const today = new Date();
    const allSlots = [];

    for (let i = 0; i < 7; i++) {
      const timeSlots = [];

      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setdocSlots(allSlots);
  }

  // ⬇️ Called when doctor info is available
  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  //  Fetch doctor info by ID
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
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
            <p>{docInfo.degree} - {docInfo.Speciality} </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          {/* ----------- doctors About ----------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium mt-3 text-gray-900'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-lg text-gray-500 ma-w-[700px] mt-1'>{docInfo.about}</p>
          </div>

          {/* ----------- doctors fee ----------- */}
          <div>
            <p className='text-gray-500 font-medium mt-4'>
              Appointment fee:
              <span className='font-bold text-gray-600'> {currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>
{/* ----------- Booking Slots ------------ */}
<div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
  <p>Booking Slots</p>
  //show day s of the week
  <div className='flex gap-3 items-center mt-4 font-medium text-gray-700'>
    {
      docSlots.length > 0 && docSlots.map((item, index) => (
        <div onClick={()=>setslotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : ' border-gray-200'}`} key={index}>
          <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
          <p>{item[0] && item[0].datetime.getDate()}</p>
        </div>
      ))
    }
  </div>
  {/* //show time slots */}
  <div className='flex gap-3 items-center w-full mt-4 font-medium text-gray-700'>
      {
        docSlots.length > 0 && docSlots[slotIndex].map((item,index)=>(
          <p onClick={()=>setslotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : ' text-gray-400 border border-gray-300' }`} key={index}>
            {item.time.toLowerCase()}
          </p>
        ))
      }
  </div>
  {/* //show selected time */}
  <button className='bg-primary text-white text-small font-light px-14 py-3 rounded-full my-6'>Book An Appointment</button>

</div>
{/* ----------  listing related doctors  -------------- */}
<RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment
