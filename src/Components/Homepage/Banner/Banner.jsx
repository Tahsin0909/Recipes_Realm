import banner from '../../../../public/banner.mp4'
const Banner = () => {
    return (
        <div className='w-100vw'>
            <video autoPlay muted loop>
                <source src={banner} type='video/mp4'/>
            </video>
        </div>
    );
};

export default Banner;