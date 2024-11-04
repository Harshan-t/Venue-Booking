import '../styles/Navbar.css'
import mylogo from '../assets/Logo.png'

function Navbar() {
    return (
        <div>
            <div className='bg-blue flex justify-between p-10'>
                <div className='min-w-6'><img src={mylogo} alt='logo' /></div>
                <div className='space-x-7'>
                    <a href='#'>Home</a>
                    <a href='#'>Venue</a>
                    <a href='#'>Profile</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;