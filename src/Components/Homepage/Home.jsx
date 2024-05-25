import Banner from "./Banner/Banner";
import DevInfos from "./DevInfos/DevInfos";
import SuccessStory from "./SuccessStory/SuccessStory";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className=" md:px-10 px-5">
                <SuccessStory />
                <DevInfos />
            </div>
        </div>

    );
};

export default Home;