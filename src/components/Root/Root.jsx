import { Outlet } from 'react-router-dom';
import './Root.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;