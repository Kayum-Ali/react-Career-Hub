import Banner from "../Banner/Banner";
import CetegoryList from "../CategoryList/CetegoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CetegoryList></CetegoryList>
            <FeaturedJobs></FeaturedJobs>

        </div>
    );
};

export default Home;