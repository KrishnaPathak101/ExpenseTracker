import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between p-5 bg-blue-500'>
        <div className=' flex gap-5'>
            <div className=' bg-white text-center  w-[30px] h-[30px] p-2 rounded-full'>$</div>
            <div className=' text-2xl text-white'>Dashboard</div>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

        </div>
    </div>
  )
}

export default Header