import React from 'react'


const LocationSearchPanel = (props) => {

  const locations = [
    "13B, Near Oven Classic's , Napier Town ,Jabalpur",
    "13B, Near Reliance , Napier Town ,Jabalpur",
    "13B, Near Sadar , Napier Town ,Jabalpur",
    "13B, Near Russel Chowk , Napier Town ,Jabalpur"
  ]

  return (
    <div>
      {/* this is just a sample data*/}
      {
        locations.map(function (elem, idx) {
          return <div key={idx} onClick={() =>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex gap-4 p-3 items-center hover:border-black border-2 border-gray-100 rounded-2xl my-4 justify-start'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
          <h4 className='font-medium'>{elem}</h4></div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel
