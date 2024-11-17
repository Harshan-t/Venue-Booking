import '../styles/Navbar.css'
import mylogo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='bg-[#dee8f2] flex justify-between p-10 min-w-[950px]'>
                <div className='min-w-48'><img src={mylogo} alt='logo' /></div>
                <div className='space-x-7'>
                    <button onClick={() => { navigate('/home') }}>Home</button>
                    <button onClick={() => { navigate('/venue') }}>Venue</button>
                    <button onClick={() => { navigate('/user/dashboard') }}>Profile</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;