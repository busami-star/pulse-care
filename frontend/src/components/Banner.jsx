import{ assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Make your appointment right now</p>
                <p className='mt-4'>with the creme de la creme of medics</p>
                
            </div>
            <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Sign Up</button>
        </div>
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full rounded-full py-[17%] absolute bottom-16 right-0 max-w-md' src={assets.appointment} alt="" />
        </div>

    </div>
  )
}

export default Banner 



