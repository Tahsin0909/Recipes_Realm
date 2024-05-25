import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Navbar = () => {
    const location = useLocation()
    const [navToggle, setNavToggle] = useState(false)
    // toggle in md and sm 
    function handleClick() {
        var collapseMenu = document.getElementById('collapseMenu');
        if (collapseMenu.style.display === 'block') {
            collapseMenu.style.display = 'none';
        } else {
            collapseMenu.style.display = 'block';
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            // Check if the current path is the home page
            if (location.pathname === '/') {
                // Handle small devices
                if (window.innerWidth > 319 && window.innerWidth < 425) {
                    const toggleHeight = 295; // Height at which to toggle nav state
                    if (window.scrollY > toggleHeight) {
                        setNavToggle(true); // Show nav if scrolled past toggleHeight
                    } else if (window.scrollY <= toggleHeight) {
                        setNavToggle(false); // Hide nav if scrolled above toggleHeight
                    }
                }
                // Handle medium devices
                if (window.innerWidth > 425 && window.innerWidth <= 768) {
                    const toggleHeight = 705; // Height at which to toggle nav state
                    if (window.scrollY > toggleHeight) {
                        setNavToggle(true); // Show nav if scrolled past toggleHeight
                    } else if (window.scrollY <= toggleHeight) {
                        setNavToggle(false); // Hide nav if scrolled above toggleHeight
                    }
                }
                // Handle large devices
                if (window.innerWidth > 768) {
                    const toggleHeight = 500; // Height at which to toggle nav state
                    if (window.scrollY > toggleHeight) {
                        setNavToggle(true); // Show nav if scrolled past toggleHeight
                    } else if (window.scrollY <= toggleHeight) {
                        setNavToggle(false); // Hide nav if scrolled above toggleHeight
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navToggle, location.pathname]);
    return (
        <div className={navToggle ? 'fixed bg-white transition-all shadow-md w-full z-50' : location.pathname == '/' ? 'fixed bg-transparent w-full z-50' : 'fixed bg-white shadow-md w-full z-50'}>
            <header className='flex  py-3 px-4 sm:px-10  font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
                <div className='flex flex-wrap items-center justify-between lg:gap-y-4 gap-y-6 gap-x-4 w-full'>
                    <a href="javascript:void(0)"><img src="https://i.ibb.co/Zc77sCg/Monogram-Elegant-Wedding-Logo-4-removebg-preview.png" alt="logo" className='w-16 md:w-24' />
                    </a>

                    <div id="collapseMenu"
                        className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>

                        {/* toggle button for close menu in md and sm  */}

                        <button id="toggleClose" onClick={() => handleClick()} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>
                        {/* toggle button for close menu in md and sm  */}

                        {/* navlink  */}
                        <ul
                            className={navToggle ? 'lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'
                                : location.pathname == '/' ? 'lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:text-white'
                                    : 'lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'}
                        >
                            <li className='mb-6 hidden max-lg:block'>
                                <Link to={'/'}>
                                    <img src="https://i.ibb.co/NrD88gt/Monogram-Elegant-Wedding-Logo-1-removebg-preview.png" alt="logo" className='w-36' />
                                </Link>
                            </li>
                            <li
                                className=''>
                                <NavLink
                                    to={`/`}
                                    className={({ isActive, isPending }) =>
                                        isActive ? "max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:after:absolute lg:after:bg-[#AB8053] lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300"
                                            : isPending ? ""
                                                : "max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-[#AB8053]  lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li
                                className=''>
                                <NavLink
                                    to={`/allRecipes`}
                                    className={({ isActive, isPending }) =>
                                        isActive ? "max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:after:absolute lg:after:bg-[#AB8053]  lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300"
                                            : isPending ? ""
                                                : "max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-[#AB8053]  lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300"}
                                >
                                    Recipes
                                </NavLink>
                            </li>
                            <li
                                className=''>
                                <NavLink
                                    to={`/addRecipes`}
                                    className={({ isActive, isPending }) =>
                                        isActive ? "max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:after:absolute lg:after:bg-[#AB8053]  lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300"
                                            : isPending ? ""
                                                : "max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-[#AB8053]  lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300"}
                                >
                                    AddRecipes
                                </NavLink>
                            </li>

                        </ul>
                        {/* navlink  */}
                    </div>

                    {/* menu icon  */}
                    <div className='flex items-center max-sm:ml-auto space-x-6'>
                        <div className="flex gap-1 items-center border border-1 p-1 lg:px-2 rounded-2xl shadow-md">
                            <img className="w-8 h-8" src="https://i.ibb.co/VjN3HZG/coins-2656376-1-removebg-preview.png" alt="" />
                            <p className="font-bold">50</p>
                        </div>
                        <button id="toggleOpen" onClick={() => handleClick()} className='lg:hidden ml-7'>
                            <svg className="w-7 h-7" fill={navToggle ? '#000000' : location.pathname === '/' ? '#ffffff' : '#000000'}
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <FcGoogle  className="md:text-4xl text-3xl hover:scale-[1.2] transition-all delay-100"/>
                        <div>
                            <img className="w-8 h-8 hover:scale-[1.2] transition-all delay-100" src="https://i.ibb.co/gd4f9RD/logout-7884039-removebg-preview.png" alt="" />
                        </div>
                    </div>
                    {/* menu icon  */}
                </div>
            </header>
        </div>
    );
};

export default Navbar;