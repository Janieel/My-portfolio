import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-full  h-80 md:px-5   '>
            <div className='bg-[#f0e3cd]  shadow-sm w-full h-60 px-5 md:px-20 lg:px-50  flex justify-between  '>
                <div>
                    <p className='font-medium text-[1.5rem] mt-5  '>Quick Link</p>
                     <p className='mt-2'>Home</p>
                     <p className='mt-2'>Projects</p>
                    <p className='mt-2'>About</p>
                    <p className='mt-2'>Contact</p>
                </div>

                <div className=''>
                    <p className='font-medium text-[1.5rem] mt-5'>Services</p>
                    <p className='mt-2'>Web development</p>
                    <p className='mt-2'>Website maintenance</p>
                    <p className='mt-2'>Responsive design</p>
                    <p className='mt-2'>Code Review</p>
                </div>
                
                {/* <div>
                    <p className='font-medium text-[1.5rem]'>Connect</p>
                    <p className='mt-2'> example@example.com</p>
                    <p className='mt-2'>Abuja, Nigeria</p>
                </div> */}
            </div>
            <div className='bg-[#f0e3cd] border-t border-gray-120  h-20 w-full flex items-center justify-center '>
                 <p>© 2026 Jane. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer