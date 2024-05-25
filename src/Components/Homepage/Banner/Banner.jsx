import banner from '../../../../public/banner.mp4'
import SharedButton from '../../Shared/Button/sharedButton';
const Banner = () => {
    return (
        <div className='w-100vw md:h-[100vh] h-[50vh]'>
            <div className='absolute text-center p-2  font-bold lg:space-y-8 md:space-y-4 space-y-3 z-30 flex flex-col justify-center items-center w-full md:h-full h-[50vh]'>
                <p className='lg:text-7xl md:text-4xl text-2xl text-white'>
                    Join the Recipe Revolution
                </p>
                <p className='lg:text-3xl md:text-2xl text-lg text-gray-50'>
                    Discover new flavors, share your favorites, and connect with fellow food lovers
                </p>
                <SharedButton text={'Get Started'}></SharedButton>
            </div>
            <video autoPlay muted loop className='w-full h-full object-cover' >
                <source src={banner} type='video/mp4' />
            </video>

        </div>
    );
};

export default Banner;