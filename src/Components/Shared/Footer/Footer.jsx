import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className=''>
            <div className="custom-shape-divider-top-1716575228">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
            <footer className="bg-[#AB8053] font-sans tracking-wide">
                <div className="py-16 lg:py-28 px-10 sm:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                        <div className="lg:col-span-2">
                            <a><img src="https://i.ibb.co/drWjwYh/Monogram-Elegant-Wedding-Logo-3-removebg-preview.png" alt="logo"
                                className='w-44 mb-8' /></a>
                            <p className="text-gray-300 text-sm">Recipes Realm: A full-stack app with ReactJS frontend, MongoDB & ExpressJS backend, Firebase auth. Explore, share and discover recipes.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-8 text-white">Navigation</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link to={'/'} className='text-gray-300 hover:text-white text-sm"'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/allRecipes'} className='text-gray-300 hover:text-white text-sm"'>
                                        Recipes
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/addRecipes'} className='text-gray-300 hover:text-white text-sm"'>
                                        Add Recipes
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-8 text-white">Follow Me</h4>

                            <ul className="flex gap-4">
                                <li>
                                    <Link to={'https://www.facebook.com/JISAN0909/'} target="_blank" rel="noopener noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-8 h-8"
                                            viewBox="0 0 24 24">
                                            <path fillRule="evenodd"
                                                d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'https://www.linkedin.com/in/tahsin-zaman-903476277/'} target="_blank" rel="noopener noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-8 h-8"
                                            viewBox="0 0 24 24">
                                            <path fillRule="evenodd"
                                                d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-8 text-white">Contact Me</h4>
                            <div className="space-y-4">
                                <p className="text-gray-300 text-sm">Ashkona, Airport</p>
                                <p className="text-gray-300 text-sm">tajisan789@gmail.com</p>
                                <p className="text-gray-300 text-sm">+8801302939902</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-center py-5 bg-[#AB8053]">
                    <p className='text-white text-sm'>© 2024 All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;