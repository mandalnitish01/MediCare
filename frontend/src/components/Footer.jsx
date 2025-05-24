import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* ------ left section -------- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non at, voluptatem ullam assumenda voluptatum quae porro ad cumque laudantium consequatur libero voluptates exercitationem totam magni voluptate! Eum, eveniet. Nostrum quisquam ea praesentium nobis explicabo commodi eum.</p>

                </div>
                {/* ------ center section -------- */}

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Private policy</li>
                    </ul>

                </div>
                {/* ------ right section -------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+123-3435-34342</li>
                        <li>medicare123@gmail.com</li>
                    </ul>


                </div>
            </div>
            {/* -----------------  Copyright Text ---------------*/}
            <div>
                <hr />
                <p className='text-center py-5 text-sm text-gray-500'>Copyright © 2023 medicare. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer