




// Api for adding doctors
const addDoctor = async (req, res)=>{
  try{
    const { name, email, password, image, speciality, degree, experience, about, available, fees, address, date, slot_booked } = req.body;
    const imageFile = req.file;
    
    console.log({ name, email, password, image, speciality, degree, experience, about, available, fees, address, date, slot_booked },imageFile)
  }catch(error){
    
  }
}

export { addDoctor };