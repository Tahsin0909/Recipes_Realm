import banner from '../../../../public/banner.mp4'
const Banner = () => {
    return (
        <div className='w-100vw md:h-[100vh] h-[50vh]'>
            <video autoPlay muted loop className='w-full h-full object-cover' >
                <source src={banner} type='video/mp4'/>
            </video>
        </div>
    );
};

export default Banner;