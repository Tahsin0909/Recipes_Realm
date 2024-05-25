import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import linkedin from '../../../../public/linkedin.png'
import github from '../../../../public/github.png'
import SharedButton from "../../Shared/Button/sharedButton";
import { Link } from "react-router-dom";
import Resume from '../../../../public/Tahsin_Zaman_MERN.pdf'
const DevInfos = () => {
    const HandleDownload = () => {
        const fileUrl = Resume;
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = 'Tahsin_Zaman_MERN.pdf';
        document.body.appendChild(anchor)
        anchor.click();
        anchor.remove();
    }
    return (
        <div className="lg:my-40 md:my-28 my-20">
            <SharedTitle title={"Let's Meet The Developer"} subtitle={'The Visionary Chef in Technology'} />
            <div className="lg:h-[70vh] md:h-[100vh] h-[85vh] md:mt-4 bg-fixed  rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/51KGsK1/istockphoto-1050725852-1024x1024.jpg)', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                <div className="flex lg:gap-10 items-center justify-center flex-col lg:flex-row mt-2 h-full">
                    <img src={'https://i.ibb.co/M7wtgBc/prof-pic-mine-removebg-preview.png'} className="lg:w-[350px] md:w-[300px] w-[200px] -translate-y-5" />
                    <div className=" text-white ">
                        <p className="lg:text-4xl md:text-2xl text-xl font-bold lg:mb-2 md:mb-2 mb-1">Tahsin Zaman</p>
                        <p className="lg:text-2xl text-lg font-bold lg:mb-4  mb-3">MERN Stack Web Developer</p>
                        <p className="lg:text-lg lg:w-[700px] md:w-[600px] w-[300px] mb-4">To leverage my web development expertise in team leadership, project
                            management, and technical proficiency to drive innovation and excellence for
                            company growth. Committed to continuous learning to stay ahead of
                            industry trends.
                        </p>
                        <div className="">
                            <p className="lg:text-lg font-bold">Fine Me</p>
                            <div className="flex gap-6 mt-2">
                                <Link to={'https://www.facebook.com/JISAN0909/'} target="_blank" rel="noopener noreferrer" >
                                    <img className="w-10 h-10 hover:scale-105 transition-all" src="https://i.ibb.co/zbF2dR6/facebook.png" alt="" />
                                </Link>
                                <Link to={'https://www.linkedin.com/in/tahsin-zaman-903476277/'} target="_blank" rel="noopener noreferrer" >
                                    <img className="w-10 h-10 hover:scale-105 transition-all" src={linkedin} alt="" />
                                </Link>
                                <Link to={'https://github.com/Tahsin0909'} target="_blank" rel="noopener noreferrer" >
                                    <img className="w-10 h-10 hover:scale-105 transition-all" src={github} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link onClick={() => HandleDownload()} >
                                <SharedButton text={'Download CV'} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DevInfos;