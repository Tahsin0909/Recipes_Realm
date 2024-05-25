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
            <div className="lg:h-[90vh] md:h-[100vh] h-[85vh] md:mt-4 bg-fixed  rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/51KGsK1/istockphoto-1050725852-1024x1024.jpg)', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                <div className="h-full flex justify-center items-center">
                    <div className="flex lg:gap-8 lg:px-20 md:px-4 lg:py-6 px-4 py-4 bg-[#2F4F4F] w-[75vw]  rounded-lg">
                        <div className="w-[60%]">
                            <div className="flex flex-col items-center justify-center">
                                <img src={'https://i.ibb.co/XxnPP7N/prof-pic-mine.png'} className="lg:w-[200px] md:w-[300px] w-[200px]  rounded-3xl" />
                                <div className="flex gap-6 lg:mt-6">
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
                            <div className="lg:my-4">
                                <p className="lg:text-2xl text-white   md:text-2xl text-xl font-bold lg:mb-2 md:mb-2 mb-1">Tahsin Zaman</p>
                                <p className="lg:text-xl  text-white text-lg font-bold lg:mb-4  mb-3">MERN Stack Web Developer</p>
                                <p className="text-white">Aspiring web developer eager to join a dynamic team. Committed to continuous learning and innovation to support company growth. Dedicated to integrity and collaboration in all endeavors.</p>
                            </div>
                        </div>
                        <div className=" w-full">
                            {/* education  */}
                            <div className=" lg:p-2  shadow-xl">
                                <div className="flex items-center gap-3 text-white md:mb-3">
                                    <img src="https://cdn-icons-png.flaticon.com/128/123/123402.png" alt="" className="w-8" />
                                    <p className="lg:text-lg font-bold">Education:</p>
                                </div>
                                <div className="text-white space-y-1" >
                                    <p>Bachelor in Computer Science and Engineering</p>
                                    <p>Northern University Bangladesh</p>
                                    <p>Graduation year: January, 2023 - August, 2026.</p>
                                </div>
                            </div>
                            {/* experience  */}
                            <div className=" lg:p-2  shadow-xl lg:mt-4">
                                <div className="flex items-center gap-3 text-white md:mb-3">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1055/1055687.png" alt="" className="w-8" />
                                    <p className="lg:text-lg font-bold">Projects:</p>
                                </div>
                                <div className="text-white" >
                                    <p className="text-lg">5+</p>
                                    <p>Full Stack Development Project.</p>
                                </div>
                            </div>
                            {/* technology  */}
                            <div className="lg:my-6 shadow-xl text-white lg:p-2 lg:py-4">
                                <div className="flex items-center gap-3 text-white md:mb-4">
                                    <img src="https://cdn-icons-png.flaticon.com/128/4319/4319100.png" alt="" className="w-8" />
                                    <p className="lg:text-lg font-bold">Technology I Used:</p>
                                </div>
                                <div className="grid lg:grid-cols-6 gap-2 items-center lg:gap-6">
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
                {/* <div className="flex lg:gap-10 items-center justify-center flex-col lg:flex-row mt-2 h-full ">
                    <div className="flex lg:gap-10 items-center justify-center flex-col  lg:px-8 md:px-4 lg:py-2 px-4 py-4 bg-[#2F4F4F]  rounded-lg">
                        <div className="flex items-center justify-between border w-full">
                            <div className="flex justify-center items-center gap-4">
                                <div>
                                    <img src={'https://i.ibb.co/XxnPP7N/prof-pic-mine.png'} className="lg:w-[100px] md:w-[300px] w-[200px]  rounded-full" />
                                    <div className="flex items-center gap-3">
                                        <img className="w-8 " src="https://cdn-icons-png.flaticon.com/128/10212/10212144.png" alt="" />
                                        <p className="lg:text-2xl text-white   md:text-2xl text-xl font-bold lg:mb-2 md:mb-2 mb-1">Tahsin Zaman</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="https://cdn-icons-png.flaticon.com/128/6211/6211957.png" alt="" className="w-8" />
                                        <p className="lg:text-xl  text-white text-lg font-bold lg:mb-4  mb-3">MERN Stack Web Developer</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="https://cdn-icons-png.flaticon.com/128/942/942748.png" alt="" className="w-8" />
                                        <p className="text-white lg:w-[700px]">Aspiring web developer eager to join a dynamic team. Committed to continuous learning and innovation to support company growth. Dedicated to integrity and collaboration in all endeavors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className=" text-white ">
                            <div className="flex items-center justify-between lg:gap-8">
                                <div className="lg:space-y-2 border lg:my-2">
                                    <div className="flex items-center gap-3">
                                        <img src="https://cdn-icons-png.flaticon.com/128/123/123402.png" alt="" className="w-8" />
                                        <p className="lg:text-lg">Education:</p>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <img className="rounded-full w-8 h-8" src="https://i.ibb.co/0CkXNGj/download.jpg" alt="" />
                                        <div>
                                            <p>Northern University Bangladesh</p>
                                            <p>2 year, Expected Graduation: August, 2026</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:space-y-2 border lg:my-2">
                                    <p className="lg:text-lg">Experience:</p>
                                    <div>
                                        <p className="text-xl text-center border font-bold">1</p>
                                        <p>Year Learning Experience</p>
                                    </div>

                                </div>
                                <div className="border">
                                    <p className="lg:text-lg font-bold text-white">Fine Me:</p>
                                    <div className="flex gap-6 mt-2">
                                        <Link to={'https://www.facebook.com/JISAN0909/'} target="_blank" rel="noopener noreferrer" >
                                            <img className="w-8 h-8 hover:scale-105 transition-all" src="https://i.ibb.co/zbF2dR6/facebook.png" alt="" />
                                        </Link>
                                        <Link to={'https://www.linkedin.com/in/tahsin-zaman-903476277/'} target="_blank" rel="noopener noreferrer" >
                                            <img className="w-8 h-8 hover:scale-105 transition-all" src={linkedin} alt="" />
                                        </Link>
                                        <Link to={'https://github.com/Tahsin0909'} target="_blank" rel="noopener noreferrer" >
                                            <img className="w-8 h-8 hover:scale-105 transition-all" src={github} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:my-6 border">
                                <p className="lg:text-lg font-bold lg:mb-5">Technology I Used:</p>
                                <div className="flex items-center lg:gap-6">
                                    <img className="w-16 " src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="" />
                                    <img className="w-16 " src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="" />
                                    <img className="w-16 " src="https://img.icons8.com/color/48/tailwindcss.png" alt="" />
                                    <img className="w-16 rounded-2xl" src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" />
                                    <img className="w-16 rounded-2xl" src="https://cdn-icons-png.flaticon.com/128/1260/1260667.png" alt="" />
                                    <img className="w-16 rounded-2xl" src="https://img.icons8.com/color/48/firebase.png" alt="" />
                                    <img className="w-16 rounded-2xl" src="https://i.ibb.co/cFZY8vF/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png" alt="" />
                                    <img className="w-16 rounded-2xl" src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" />
                                    <img className="w-16 rounded-2xl" src="https://i.ibb.co/LPW4NYn/icons8-express-js-480.png" alt="" />
                                    <img className="w-16 rounded-2xl" src="https://i.ibb.co/RNstMWB/1-r-L8-Buu7o6jn-G-TYV1-Wube-Q-removebg-preview.png" alt="" />
                                    <img className="w-16 rounded-2xl" src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link onClick={() => HandleDownload()} >
                                    <SharedButton text={'Download CV'} />
                                </Link>
                            </div>
                        </div> */}
                {/* </div>
        </div> * /} */}
            </div >
        </div >

    );
};

export default DevInfos;