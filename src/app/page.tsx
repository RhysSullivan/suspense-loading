"use client"
import dynamic from 'next/dynamic'
import { useState } from 'react';

const NoSsrDynamicComponent = dynamic(() => import('./no-ssr-component'), {
  ssr: false,
})
const SSRDynamicComponent = dynamic(() => import('./ssr-component'), {
  ssr: true,
})

export default  function Home() {
  const [showNoSsrComponent, setShowNoSsrComponent] = useState(false)
  const [showSsrComponent, setShowSsrComponent] = useState(false)
  return (
    <div className='bg-green-500 min-h-screen w-full p-8'>
      <div className='flex flex-row gap-8 justify-center'>
        <div className='flex flex-col items-center gap-4'>
          <button 
            onClick={() => setShowNoSsrComponent(true)}
            className='px-6 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200 font-medium text-gray-800'
          >
            Show No SSR Component
          </button>
          {showNoSsrComponent && <NoSsrDynamicComponent />}
        </div>

        <div className='flex flex-col items-center gap-4'>
          <button 
            onClick={() => setShowSsrComponent(true)}
            className='px-6 py-2 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200 font-medium text-gray-800'
          >
            Show SSR Component
          </button>
          {showSsrComponent && <SSRDynamicComponent />}
        </div>
      </div>
    </div>
  );
}
