import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div className="relative">
        <h5 className="p-1 text-center w-fit absolute -top-12 left-1/2 -translate-x-1/2 z-20   "
          onClick={() => { props.setVehiclePanel(false) }}>
          <i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className='flex items-center text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        <div onClick={() =>{
          props.setConfirmRidePanel(true)}
        } className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" className="h-10" />
          <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-group-line"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹195.50</h2>
        </div>
        <div onClick={() =>{
          props.setConfirmRidePanel(true)}
         }className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRAoYVgWlss_HyVwOUPTcZdzRvnPNNUg7w&s" alt="" className="h-10" />
          <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-group-line"></i>1</span></h4>
              <h5 className='font-medium text-sm'>5 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹70.50</h2>
        </div>
        <div onClick={() =>{
          props.setConfirmRidePanel(true)}
        }className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6o89EzpWQuyHlR4xcLXzYQ3W3nifSnCHsCA&s" alt="" className="h-10" />
          <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-base'>Auto <span><i className="ri-group-line"></i></span></h4>
              <h5 className='font-medium text-sm'>5 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.50</h2>
        </div>
    </div>
  )
}

export default VehiclePanel

