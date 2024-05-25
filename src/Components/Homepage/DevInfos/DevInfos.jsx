import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import linkedin from '../../../../public/linkedin.png'
import github from '../../../../public/github.png'
// import SharedButton from "../../Shared/Button/sharedButton";
import { Link } from "react-router-dom";
// import Resume from '../../../../public/Tahsin_Zaman_MERN.pdf'
const DevInfos = () => {
    // const HandleDownload = () => {
    //     const fileUrl = Resume;
    //     const anchor = document.createElement('a');
    //     anchor.href = fileUrl;
    //     anchor.download = 'Tahsin_Zaman_MERN.pdf';
    //     document.body.appendChild(anchor)
    //     anchor.click();
    //     anchor.remove();
    // }
    return (
        <div className="lg:my-40 md:my-28 my-20">
            <SharedTitle title={"Let's Meet The Developer"} subtitle={'The Visionary Chef in Technology'} />
            <div className="lg:h-[90vh] md:h-[120vh] h-[160vh] md:mt-4 bg-fixed  rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/51KGsK1/istockphoto-1050725852-1024x1024.jpg)', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                <div className="h-full flex justify-center items-center">
                    <div className="flex lg:flex-row flex-col lg:gap-8 lg:px-20 lg:py-6 md:px-8 md:py-6 px-6 py-6 bg-[#2F4F4F] w-[75vw]  rounded-lg">
                        <div className="lg:w-[60%] flex lg:flex-col md:flex-row flex-col lg:gap-0 md:gap-4 gap-6">
                            <div className="flex flex-col items-center justify-center">
                                <img src={'https://i.ibb.co/XxnPP7N/prof-pic-mine.png'} className="lg:w-[200px] md:w-[150px] w-[200px]  rounded-3xl" />
                                <div className="flex gap-6 lg:mt-6 mt-3">
                                    <Link to={'https://www.facebook.com/JISAN0909/'} target="_blank" rel="noopener noreferrer" >
                                        <img className="w-6 h-6 hover:scale-105 transition-all" src="https://i.ibb.co/zbF2dR6/facebook.png" alt="" />
                                    </Link>
                                    <Link to={'https://www.linkedin.com/in/tahsin-zaman-903476277/'} target="_blank" rel="noopener noreferrer" >
                                        <img className="w-6 h-6 hover:scale-105 transition-all" src={linkedin} alt="" />
                                    </Link>
                                    <Link to={'https://github.com/Tahsin0909'} target="_blank" rel="noopener noreferrer" >
                                        <img className="w-6 h-6 hover:scale-105 transition-all" src={github} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:my-4 lg:w-full md:w-[70%]">
                                <p className="lg:text-2xl text-white   md:text-2xl text-xl font-bold lg:mb-2 md:mb-2 mb-1">Tahsin Zaman</p>
                                <p className="lg:text-xl  text-white text-lg font-bold lg:mb-4  mb-3">MERN Stack Web Developer</p>
                                <p className="text-white">Aspiring web developer eager to join a dynamic team. Committed to continuous learning and innovation to support company growth. Dedicated to integrity and collaboration in all endeavors.</p>
                            </div>
                        </div>
                        <div className=" w-full lg:mt-0 md:mt-10 mt-8">
                            {/* education  */}
                            <div className="p-2  shadow-xl">
                                <div className="flex items-center gap-3 text-white mb-3">
                                    <img src="https://cdn-icons-png.flaticon.com/128/123/123402.png" alt="" className="w-8" />
                                    <p className="md:text-lg font-bold">Education:</p>
                                </div>
                                <div className="text-white space-y-1 md:text-base text-sm" >
                                    <p>Bachelor in Computer Science and Engineering</p>
                                    <p>Northern University Bangladesh</p>
                                    <p>Graduation year: January, 2023 - August, 2026.</p>
                                </div>
                            </div>
                            {/* experience  */}
                            <div className=" p-2  shadow-xl lg:mt-4 mt-8">
                                <div className="flex items-center gap-3 text-white mb-3">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1055/1055687.png" alt="" className="w-8" />
                                    <p className="md:text-lg font-bold">Projects:</p>
                                </div>
                                <div className="text-white" >
                                    <p className="text-lg">5+</p>
                                    <p>Full Stack Development Project.</p>
                                </div>
                            </div>
                            {/* technology  */}
                            <div className="my-6 shadow-xl text-white p-2 md:py-4">
                                <div className="flex items-center gap-3 text-white mb-4">
                                    <img src="https://cdn-icons-png.flaticon.com/128/4319/4319100.png" alt="" className="w-8" />
                                    <p className="md:text-lg font-bold">Technology I Used:</p>
                                </div>
                                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3 gap-4 md:gap- items-center lg:gap-6">
                                    <img className="w-10  " src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="" />
                                    <img className="w-10  " src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="" />
                                    <img className="w-10  " src="https://img.icons8.com/color/48/tailwindcss.png" alt="" />
                                    <img className="w-10 bg-white rounded-2xl" src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" />
                                    <img className="w-10 bg-white rounded-2xl" src="https://cdn-icons-png.flaticon.com/128/1260/1260667.png" alt="" />
                                    <img className="w-10 bg-white rounded-2xl" src="https://img.icons8.com/color/48/firebase.png" alt="" />
                                    <img className="w-10 bg-white rounded-2xl" src="https://i.ibb.co/cFZY8vF/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png" alt="" />
                                    <img className="w-10 bg-white rounded-2xl" src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" />
                                    <img className="w-10 bg-white rounded-2xl" src="https://i.ibb.co/LPW4NYn/icons8-express-js-480.png" alt="" />
                                    <img className="w-10  rounded-2xl" src="https://i.ibb.co/RNstMWB/1-r-L8-Buu7o6jn-G-TYV1-Wube-Q-removebg-preview.png" alt="" />
                                    <img className="w-10 bg-white rounded-2xl" src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    );
};

export default DevInfos;