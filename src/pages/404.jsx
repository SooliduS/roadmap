import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <main>
            <p>صفحه مورد نظر پیدا نشد</p>
            <Link to='/'>صفحه نخست</Link>
        </main>
    );
};

export default NotFound;
