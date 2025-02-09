
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/doctors" element={<Doctors />} /> 
        <Route path="/doctors/:expartise" element={<Doctors />} />
        <Route path="/my-profile" element={<MyProfile />} /> 
        <Route path="/my-appointments" element={<MyAppointments />} /> 
        <Route path="/appointments" element={<Appointments />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App