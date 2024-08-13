import Navigator from './navigator';
import TopNav from './topNav';

export default function Layout({ children }) {

    return (
        <div>
            <TopNav />
            {children}
            <Navigator />
        </div>
    );
}
