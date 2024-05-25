import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import linkedin from '../../../../public/linkedin.png'
import github from '../../../../public/github.png'
import SharedButton from "../../Shared/Button/sharedButton";
import { Link } from "react-router-dom";
const DevInfos = () => {
    return (
        <div className="lg:my-40">
            <SharedTitle title={"Let's Meet The Developer"} subtitle={'The Visionary Chef in Technology'} />
            <div className="h-[70vh] lg:mt-4 bg-fixed  rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/51KGsK1/istockphoto-1050725852-1024x1024.jpg)', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                <div className="flex lg:gap-10 items-center justify-center flex-col lg:flex-row mt-2 h-full">
                    <img src={'https://i.ibb.co/M7wtgBc/prof-pic-mine-removebg-preview.png'} className="w-[350px]  -translate-y-5" />
                    <div className=" text-white ">
                        <p className="lg:text-4xl font-bold lg:mb-2">Tahsin Zaman</p>
                        <p className="lg:text-2xl font-bold lg:mb-4">MERN Stack Web Developer</p>
                        <p className="lg:text-lg lg:w-[700px] mb-4">To leverage my web development expertise in team leadership, project
                            management, and technical proficiency to drive innovation and excellence for
                            company growth. Committed to continuous learning to stay ahead of
                            industry trends.
                        </p>
                        <div className="">
                            <p className="lg:text-lg">Fine Me</p>
                            <div className="flex gap-6 mt-2">
                                <Link to={'https://www.facebook.com/JISAN0909/'} target="_blank" rel="noopener noreferrer" >
                                    <img className="md:w-10 md:h-10" src="https://i.ibb.co/zbF2dR6/facebook.png" alt="" />
                                </Link>
                                <Link to={'https://www.linkedin.com/in/tahsin-zaman-903476277/'} target="_blank" rel="noopener noreferrer" >
                                    <img className="md:w-10 md:h-10" src={linkedin} alt="" />
                                </Link>
                                <Link to={'https://github.com/Tahsin0909'} target="_blank" rel="noopener noreferrer" >
                                    <img className="md:w-10 md:h-10" src={github} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6">
                            <SharedButton text={'Download CV'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DevInfos;