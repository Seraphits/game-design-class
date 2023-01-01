import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import '../Tailwind.css'

export const Modal = ({onClose, children, actionBar}) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [])
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='fixed inset-0 bg-gray-300 opacity-80'
      ></div>
      <div className='fixed inset-40 p-10 bg-white'>
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div children='flex justify-end'>{actionBar} </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  )
}

// Modern React with Redux [2023 Update] section 14 Creating Portals eith ReactDOM

// Make sure to add div to index.html

// https://www.youtube.com/watch?v=xSWkArLGkR4  use to help with typescript
