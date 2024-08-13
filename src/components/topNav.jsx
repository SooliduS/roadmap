import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <nav className='hidden md:block bg-neutral-800  text-white font-bold z-50'>
            <ul className='w-full h-full  flex items-center gap-6 px-10'>
                <Link className='nav-link ' to='/'>
                    <li className='nav-li'>خانه</li>
                </Link>
                <Link className='nav-link' to='/map'>
                    <li className='nav-li'>نقشه</li>
                </Link>
            </ul>
        </nav>
    );
};

export default TopNav;
