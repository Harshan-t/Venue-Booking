import '../styles/Navbar.css'
import mylogo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='bg-[#dee8f2] flex justify-between p-10'>
                <div className='min-w-6'><img src={mylogo} alt='logo' /></div>
                <div className='space-x-7'>
                    <button onClick={() => { navigate('/home') }}>Home</button>
                    <button onClick={() => { navigate('/venue') }}>Venue</button>
                    <button onClick={() => { navigate('/profile') }}>Profile</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;