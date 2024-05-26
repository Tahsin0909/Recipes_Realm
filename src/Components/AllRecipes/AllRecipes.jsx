import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import SharedTitle from "../Shared/SharedTitle/SharedTitle";
const AllRecipes = () => {
    const [allRecipes, setAllRecipes] = useState(null)
    useEffect(() => {
        fetch('/recepies.json')
            .then(res => res.json())
            .then(data => setAllRecipes(data))
    }, [])
    // console.log(allRecipes);
    return (
        <div className=" pt-28 md:pt-36 md:px-10 px-5">
            <SharedTitle subtitle={'Delicious Recipes from Our Community'} title={'Recipes'} />
            <div className="flex flex-col justify-center items-center lg:gap-14 md:gap-12 gap-10 ">
                {
                    allRecipes?.map((recipe, idx) => <div key={idx} className="lg:mt-10 md:mt-8 mt-6 group flex shadow-lg rounded-lg justify-center lg:gap-6 md:gap-4 gap-2 lg:w-[800px] md:w-[600px]">
                        <div>
                            <p className=" absolute bg-[#2F4F4F] bg-opacity-35 lg:translate-x-[320px] lg:translate-y-[250px] md:translate-x-[200px] md:translate-y-[160px] translate-x-[110px] translate-y-[160px] lg:px-4 lg:py-2 md:px-2 md:py-1 p-1 font-bold text-white rounded-lg md:text-base text-xs">Watch: {recipe.watchCount.length}</p>
                            <Link to={`/${idx}?country=${recipe.country}&category=${recipe.category}`}>
                            <button className="absolute hidden group-hover:flex items-center lg:gap-2 gap-1 lg:border-2 border lg:translate-x-[140px] lg:translate-y-[120px] md:translate-x-[90px] md:translate-y-[80px] translate-x-[40px] translate-y-[80px] lg:px-4 lg:py-2 p-2 lg:text-lg md:text-base text-sm text-white rounded-full font-bold active:scale-95 transition-all">View Details <GrLinkNext /> </button>
                            </Link>
                            <img className="lg:w-[500px] lg:h-[300px] md:w-[300px] md:h-[200px] w-[180px] h-[190px] object-cover rounded-l-lg" src={recipe.recipeImage} alt="" />
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