import Banner from "./Banner/Banner";
import DevInfos from "./DevInfos/DevInfos";
import SuccessStory from "./SuccessStory/SuccessStory";

const Home = () => {
    return (
        <div className=" md:px-10 px-5">
            <Banner/>
            <SuccessStory/>
            <DevInfos/>
        </div>
    );
};

export default Home;