import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import SharedTitle from "../Shared/SharedTitle/SharedTitle";
import { useForm } from "react-hook-form";
import useRecipes from "../../Hooks/useRecipes";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Context/ContextApi";




const AllRecipes = () => {
    const axiosPublic = useAxiosPublic()
    const [search, setSearch] = useState('');
    const [allRecipes, setAllRecipes] = useState(null)
    const [recipesData, isPending, refetch] = useRecipes()
    useEffect(() => {
        setAllRecipes(recipesData)
    }, [recipesData])
    // console.log(allRecipes);
    const { AuthUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axiosPublic.get(`/suggestion?country=${data.country}&category=${data.category}`)
            .then(data => setAllRecipes(data.data))
    }


    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleClick = () => {
        axiosPublic.get(`/search?q=${search}`)
            .then(data => setAllRecipes(data.data))
    };

    const habdlePurchase = (id) =>{
        axiosPublic.put(`/recipes/${id}`, { "email": AuthUser?.email })
    }
    return (
        <div className=" pt-28 md:pt-36 md:px-10 px-5">
            <SharedTitle subtitle={'Delicious Recipes from Our Community'} title={'Recipes'} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center">
                    <div className="flex lg:flex-row flex-col-reverse  lg:gap-20 md:gap-8 gap-4 lg:justify-between  items-center lg:my-10 md:my-8 my-4"  >
                        <div className="relative flex items-center">
                            <input name="search" type='text' placeholder='Search' onChange={handleInputChange}
                                className="pr-4 pl-14 py-3 lg:text-lg md:text-md text-sm  text-black rounded lg:w-[500px] md:w-[440px] w-[380px] bg-white border-b border-gray-400 focus:border-b outline-none focus:border-green-600" />
                            <div className="absolute left-4 hover:cursor-pointer active:scale-95 transition-all" onClick={() => handleClick()}>
                                <img src="https://cdn-icons-png.flaticon.com/128/9367/9367798.png" alt="" className="w-8 h-8 " />
                            </div>
                        </div>
                        <div className="flex lg:gap-10 md:gap-6 gap-6">
                            <div className="relative flex items-center">
                                <input {...register("country")} type='text' placeholder='Country'
                                    className="pr-4 pl-14 py-3 lg:text-lg md:text-md text-sm  text-black rounded lg:w-[200px] md:w-[150px] w-[120px] bg-white border-b border-gray-400 focus:border-b outline-none focus:border-green-600" />
                                <div className="absolute left-4">
                                    <img src="https://cdn-icons-png.flaticon.com/128/2947/2947656.png" alt="" className="w-8 h-8" />
                                </div>
                            </div>
                            <div className="relative flex items-center">
                                <input {...register("category")} type='text' placeholder='Category'
                                    className="pr-4 pl-14 py-3 lg:text-lg md:text-md text-sm  text-black rounded lg:w-[200px] md:w-[150px] w-[120px] bg-white border-b border-gray-400 focus:border-b outline-none focus:border-green-600" />
                                <div className="absolute left-4">
                                    <img src="https://cdn-icons-png.flaticon.com/128/14264/14264148.png" alt="" className="w-8 h-8" />
                                </div>
                            </div>
                            <button type="submit" className="w-fit inputButton">
                                Filter
                            </button>

                        </div>

                    </div>
                </div>

            </form>
            <div className="flex flex-col justify-center items-center lg:gap-14 md:gap-12 gap-10 lg:mb-20 md:mb-10 mb-8">
                {
                    allRecipes?.map((recipe, idx) => <div key={idx} className="lg:mt-10 md:mt-8 mt-6 group flex shadow-lg rounded-lg justify-center lg:gap-6 md:gap-4 gap-2 lg:w-[800px] md:w-[600px]">
                        <div>
                            <p className=" absolute bg-[#2F4F4F] bg-opacity-35 lg:translate-x-[300px] lg:translate-y-[250px] md:translate-x-[180px] md:translate-y-[160px] translate-x-[100px] translate-y-[160px] lg:px-4 lg:py-2 md:px-2 md:py-1 p-1 font-bold text-white rounded-lg md:text-base text-xs">Purchase: {recipe.watchCount?.length}</p>
                            <Link  >
                                <button onClick={() => document.getElementById(`recipes-${idx}`).showModal()} className="absolute hidden group-hover:flex items-center lg:gap-2 gap-1 lg:border-2 border lg:translate-x-[140px] lg:translate-y-[120px] md:translate-x-[90px] md:translate-y-[80px] translate-x-[40px] translate-y-[80px] lg:px-4 lg:py-2 p-2 lg:text-lg md:text-base text-sm text-white rounded-full font-bold active:scale-95 transition-all">View Details <GrLinkNext /> </button>
                            </Link>
                            <img className="lg:w-[500px] lg:h-[300px] md:w-[300px] md:h-[200px] w-[180px] h-[190px] object-cover rounded-l-lg" src={recipe.recipeImage} alt="" />
                            <dialog id={`recipes-${idx}`}>
                                <div
                                    className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                                    <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
                                        <svg onClick={() => document.getElementById(`recipes-${idx}`).close()} xmlns="http://www.w3.org/2000/svg"
                                            className="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591">
                                            <path
                                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                                data-original="#000000"></path>
                                            <path
                                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                                data-original="#000000"></path>
                                        </svg>
                                        <div className="my-8 flex items-start space-x-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 shrink-0 fill-[#333]" viewBox="0 0 512 512">
                                                <path
                                                    d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
                                                    data-original="#000000" />
                                                <path
                                                    d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
                                                    data-original="#000000" />
                                            </svg>
                                            <div>
                                                <h4 className="text-xl text-[#333] font-semibold">Sure you want to accept?</h4>
                                                <p className="text-sm text-gray-500 mt-4">Are you sure you want Purchase this?</p>

                                            </div>
                                        </div>
                                        <Link to={`/recipes/${recipe._id}?country=${recipe.country}&category=${recipe.category}`}>
                                            <button onClick={() => habdlePurchase(recipe._id)} type="button"
                                                className="px-6 py-2.5 min-w-[150px] w-full rounded text-white text-sm font-semibold border-none outline-none bg-[#333] hover:bg-[#111]">Yes,
                                                confirm</button>

                                        </Link>

                                    </div>
                                </div>
                            </dialog>

                        </div>
                        <div className="w-[50%] lg:p-2 md:p-2 px-1 py-2 flex flex-col">
                            <p className="lg:text-xl font-bold md:text-lg lg:mb-3 mb-1 text-[#2F4F4F]">{recipe.recipeName}</p>
                            <p className="md:text-base text-sm"> <span className="font-bold text-[#2F4F4F]">Ingredients:</span> {recipe.ingredients}</p>
                            <div className="flex justify-between items-center lg:my-3 md:my-2 my-3 flex-grow-0">
                                <div className="flex items-center lg:gap-2 gap-1">
                                    <img className="lg:w-8 md:w-6 w-4" src="https://cdn-icons-png.flaticon.com/128/2947/2947656.png" alt="" />
                                    <p className="md:text-lg font-bold text-[#8B4513] text-sm">{recipe.country}</p>
                                </div>
                                <div className="flex items-center lg:gap-2 gap-1">
                                    <img src="https://cdn-icons-png.flaticon.com/128/14264/14264148.png" alt="" className="lg:w-8 md:w-6 w-4" />
                                    <p className="md:text-lg font-bold text-[#8B4513] text-sm">{recipe.category}</p>
                                </div>

                            </div>
                            <div className="flex items-center lg:gap-3 md:gap-2 gap-1 lg:p-2 md:p-2 p-1 rounded-xl shadow-lg lg:mt-12">
                                <img className="lg:w-[60px] md:w-[40px] w-10 rounded-full" src={recipe.creatorPhotoUrl} alt="" />
                                <div>
                                    <p className="font-bold text-sm">{recipe.creatorName}</p>
                                    <p className="text-xs">{recipe.creatorEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllRecipes;