import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub || Home</title>
            </Helmet>
            <Banner />
            <CategoryList />
            <FeaturedJobs />
            <h2>Home</h2>
        </div>
    );
};

export default Home;