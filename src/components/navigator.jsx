import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navigator = () => {
    return (
        <nav className='md:hidden text-white font-bold z-50'>
            <ul className='w-full h-full  flex items-center justify-around'>
                <Link className='nav-link ' to='/'>
                    <li className='nav-li'><FontAwesomeIcon icon={faHome} size='xl' /></li>
                </Link>
                <Link className='nav-link' to='/map'>
                    <li className='nav-li'><FontAwesomeIcon icon={faMapLocationDot} size='xl' /></li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navigator;
