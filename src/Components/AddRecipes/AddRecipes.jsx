import { useForm } from "react-hook-form";
import axios from "axios";
import '../../../src/index.css'
import SharedTitle from "../Shared/SharedTitle/SharedTitle";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextApi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
const AddRecipes = () => {
    const { AuthUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const image = data.image[0]
        // console.log(image);
        try {
            const formData = new FormData();
            formData.append('image', image);
            // console.log(formData);
            // image sending to imagbb
            const res = await axios.post("https://api.imgbb.com/1/upload?key=084c828cb07b191daf9262ae088bdd35", formData)

            // if status is ok
            // console.log(res);
            if (res.status === 200) {
                console.log('done');
                const result = res.data
                const HostedImage = result.data.display_url
                // console.log(HostedImage);
                const newRecipes = {
                    recipeName: data.recipeName,
                    recipeImage: HostedImage,
                    recipeDetails: data.details,
                    ingredients: data.ingredients,
                    youtubeEmbedCode: data.video,
                    country: data.country,
                    category: data.Category,
                    creatorEmail: AuthUser.email,
                    creatorName: AuthUser.displayName,
                    creatorPhotoUrl: AuthUser.photoURL,
                    watchCount: 0,
                    purchasedBy: [],
                    createdAt: "timestamp"
                }
                // console.log(newRecipes);
                axiosPublic.post(`/recipes/${AuthUser.email}`, newRecipes)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.insertedId || (res.data.modifiedCount > 0 || res.data.matchedCount > 0 || res)) {
                            toast.success(`Recipes Added SuccessFull`, {
                                id: 'logIn',
                            })
                        }
                    })
                reset()
            }
        }
        catch {
            console.log('error');
        }
    }
    return (
        <div className=" pt-24 md:pt-32 md:px-10 px-5">
            <SharedTitle subtitle={'Share Your Culinary Masterpieces'} title={'Add Recipes'} />
            <div className="flex md:justify-center items-center lg:my-10 md:my-8 my-6 ">
                <form onSubmit={handleSubmit(onSubmit)} className="lg:space-y-8 md:space-y-6 space-y-6 w-full md:w-[82vw] lg:w-[55vw]">
                    {/* <input defaultValue="test" readOnly {...register("example")} /> */}

                    {/* <input {...register("exampleRequired", { required: true })} /> */}
                    {/* errors will return when field validation fails  */}

                    <div className="flex md:flex-row flex-col justify-center items-center lg:gap-10  gap-6">
                        <div className="lg:space-y-8 md:space-y-6 space-y-6 w-full">
                            <div>
                                <div className="relative flex items-center">
                                    <input {...register("recipeName", { required: true })} type='text' placeholder='Recipe name'
                                        className="pr-4 pl-14 py-3 lg:text-lg md:text-md text-sm  text-black rounded lg:w-[500px] md:w-[300px] w-full bg-white border-b border-gray-400 focus:border-b outline-none focus:border-green-600" />
                                    <div className="absolute left-4">
                                        <img src="https://cdn-icons-png.flaticon.com/128/9521/9521818.png" alt="" className="w-6" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative flex items-center">
                                    <input {...register("ingredients", { required: true })} type='text' placeholder='Ingredients'
                                        className="pr-4 pl-14 py-3 lg:text-lg md:text-md text-sm  text-black rounded lg:w-[500px] md:w-[300px] w-full bg-white border-b border-gray-400 focus:border-b outline-none focus:border-green-600" />
                                    <div className="absolute left-4">
                                        <img src="https://cdn-icons-png.flaticon.com/128/601/601939.png" alt="" className="w-6" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <label
                            className="bg-white text-gray-500 font-semibold text-base rounded md:max-w-md w-full lg:h-[140px] h-[135px] flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                                <path
                                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                    data-original="#000000" />
                                <path
                                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                    data-original="#000000" />
                            </svg>
                            Upload file

                            <input {...register("image", { required: true })} type="file" id='uploadFile1' className="hidden" />
                            {errors.image && <span>This field is required</span>}
                            <p className="text-xs font-medium text-gray-400 mt-2">PNG, JPG SVG, WEBP are Allowed.</p>
                        </label>
                    </div>



                    <div className="relative flex items-center">
                        <input {...register("details", { required: true })} type='text' placeholder='Details'
                            className="pr-4 pl-14 py-3 lg:text-lg md:text-md text-sm  text-black rounded  w-full bg-white border-b border-gray-400 focus:border-b outline-none focus:border-green-600" />
                        <div className="absolute left-4">
                            <img src="https://cdn-icons-png.flaticon.com/128/8568/8568981.png" alt="" className="w-6" />
                        </div>
                    </div>

                    <div className="relative flex items-center">
                        <input {...register("video", { required: true })} type='text' placeholder='Youtube Embedded Code'
                            className="pr-4 pl-14 py-3 lg:text-lg md:text-md text-sm  text-black rounded  w-full bg-white border-b border-gray-400 focus:border-b outline-none focus:border-green-600" />
                        <div className="absolute left-4">
                            <img src="https://cdn-icons-png.flaticon.com/128/10827/10827213.png" alt="" className="w-6" />
                        </div>
                    </div>

                    <div className=" md:space-y-0 space-y-6 w-full flex md:flex-row flex-col md:items-center lg:gap-10 md:gap-6">
                        <div className="relative flex items-center">
                            <input {...register("country", { required: true })} type='text' placeholder='Country'
                                className="pr-4 pl-14 py-3 lg:text-lg md:text-md text-sm  text-black rounded lg:w-[400px] md:w-[300px] w-full  bg-white border-b border-gray-400 focus:border-b outline-none focus:border-green-600" />
                            <div className="absolute left-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/4830/4830735.png" alt="" className="w-6" />
                            </div>
                        </div>
                        <div className="relative flex items-center">
                            <input {...register("Category", { required: true })} type='text' placeholder='Category'
                                className="pr-4 pl-14 py-3 lg:text-lg md:text-md text-sm  text-black rounded lg:w-[400px] md:w-[300px] w-full  bg-white border-b border-gray-400 focus:border-b outline-none focus:border-green-600" />
                            <div className="absolute left-4">
                                <img src="https://cdn-icons-png.flaticon.com/128/13984/13984105.png" alt="" className="w-6" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-center w-full">
                        <button type="submit" className="w-fit inputButton">
                            Add Recipes
                        </button>
                    </div>

                </form>
            </div>
            {/* preview  */}
            <div>

            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default AddRecipes;