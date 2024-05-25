import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const SuccessStory = () => {
    const testimonials = [
        {
            "email": "john.doe@example.com",
            "name": "John Doe",
            "photoUrl": "https://i.ibb.co/LnbRVVf/smiley-handsome-man-posing-1.jpg",
            "story": "I tried the Curry recipe from this platform, and it turned out amazing! The instructions were easy to follow, and the end result was delicious. Can't wait to try more recipes!"
        },
        {
            "email": "jane.smith@example.com",
            "name": "Jane Smith",
            "photoUrl": "https://i.ibb.co/bKBrtZT/handsome-young-man-with-arms-crossed-white-background-1.jpg",
            "story": "I'm so glad I discovered this recipe sharing platform! The community here is fantastic, and I've already found several new favorite recipes to try. It's become my go-to resource for meal inspiration."
        },
        {
            "email": "alex.jones@example.com",
            "name": "Alex Jones",
            "photoUrl": "https://i.ibb.co/N3tcvhy/portrait-man-laughing-1.jpg",
            "story": "As someone who loves cooking, I'm always on the lookout for new recipes to try. This platform has exceeded my expectations with its diverse collection of recipes and user-friendly interface. I've already recommended it to all my friends!"
        }
    ]
    return (
        <div className=" md:mt-20 mt-20 ">
            <SharedTitle title={'Our Success Story'} subtitle={'Join us in celebrating our journey of culinary exploration and community building'} />

            {/* testimonials  */}
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper lg:mt-20 md:mt-14 mt-10" >
                {
                    testimonials.map((data, idx) => <SwiperSlide key={idx} className="flex flex-col justify-center items-center mb-4" >
                        <div className="space-y-4 lg:w-[50vw] md:w-[70vw] md:h-[30vh] lg:h-[35vh] h-[35vh] w-[80vw]  lg:p-8  p-4 rounded-lg mb-4 shadow-md">
                            <div className="flex gap-2 items-center">
                                <img src={data.photoUrl} alt="" className="md:w-20 w-14 md:h-20 h-14 rounded-full" />
                                <div>
                                    <p className="md:text-lg font-bold">{data.name}</p>
                                    <p className="md:text-lg font-bold">{data.email}</p>
                                </div>
                            </div>
                            <p className="md:text-lg">{data.story}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default SuccessStory;