import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/ContextApi";

const Recipes = () => {
    const axiosPublic = useAxiosPublic()
    const [data, setData] = useState(null)
    const url = useParams()
    console.log(url.id);
    const { AuthUser } = useContext(AuthContext)
    useEffect(() => {
       AuthUser && axiosPublic.get(`/recipes/${url.id}`, { "email": AuthUser?.email })
            .then(data => setData(data.data))
    }, [ AuthUser])
    console.log(data);
    return (
        <div className=" pt-28 md:pt-36 md:px-10 px-5">
            <div>
                {
                    data?.map((recipes, idx) => <div key={idx}>
                        <p>{recipes.recipeName}</p>
                        <img src={recipes.recipeImage} alt="" className="w-40" />
                        <p>status: {recipes.status}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Recipes;