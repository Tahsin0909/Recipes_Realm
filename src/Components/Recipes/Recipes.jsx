import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/ContextApi";

const Recipes = () => {
    const axiosPublic = useAxiosPublic()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const url = useParams()
    // console.log(url.id);
    const { AuthUser } = useContext(AuthContext)
    useEffect(() => {
        AuthUser && axiosPublic.get(`/recipes/${url.id}`, { "email": AuthUser?.email })
            .then(data => { setData(data.data), setLoading(false) })
    }, [AuthUser])
    // console.log(data);
    return (
        <div className=" pt-28 md:pt-36 md:px-10 px-5">
            <div>
                {
                    loading ? <p>Loading</p> :
                        <div >
                            <p>{data?.recipeName}</p>
                            <img className="w-[700px] shadow-2xl rounded-md z-40" src={data?.recipeImage} alt=""  />
                            <p>status: {data?.status}</p>
                        </div>


                }
            </div>
        </div>
    );
};

export default Recipes;