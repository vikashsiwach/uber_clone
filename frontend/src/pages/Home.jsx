import React,{ useRef, useState} from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

import LocationSearchPanel from '../components/LocationSearchPanel'
import ConfirmRide from '../components/ConfirmRide'
import VehiclePanel from '../components/VehiclePanel'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
import { Link } from 'react-router-dom'


const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ panelOpen ])

    useGSAP(function(){
      if(vehiclePanel){
        gsap.to(vehiclePanelRef.current,{
          transform:'translateY(0)'
        })
      }else{
          gsap.to(vehiclePanelRef.current,{
            transform:'translateY(100%)'
          })
      }
    },[vehiclePanel])

    useGSAP(function() {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current,{
          transform: 'translateY(0)'
        })
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(100%)'
        })
      }
    },[confirmRidePanel])

    useGSAP(function() {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current,{
          transform: 'translateY(0)'
        })
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
        })
      }
    },[waitingForDriver])

    useGSAP(function() {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current,{
          transform: 'translateY(0)'
        })
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: 'translateY(100%)'
        })
      }
    },[vehicleFound])

  return (
    <div className='h-screen relative'>
      <div className='fixed p-6 z-50 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/login' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form className='relative py-3' onSubmit={(e) =>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
                onClick = {() => {
                  setPanelOpen(true)
                }}
                value = {pickup}
                onChange = {(e) => {
                  setPickup(e.target.value)
                }}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                type="text"
                placeholder='Add a pick-up location'
              />
              <input
                onClick = {() => {
                  setPanelOpen(true)
                }}
                value = {destination}
                onChange = {(e) => {
                  setDestination(e.target.value)
                }}
                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                type="text"
                placeholder='Enter your destination' />
          </form>
        </div>
      <div ref={panelRef} className='bg-white h-0'>
        <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
      </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-14'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div  ref ={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref= {waitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-10 pt-14'>
        <WaitingForDriver setwaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  )
}

export default Home
