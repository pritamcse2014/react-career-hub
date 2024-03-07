import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <Link to={'/'}>Go Back to Home</Link>
        </div>
    );
};

export default NotFound;