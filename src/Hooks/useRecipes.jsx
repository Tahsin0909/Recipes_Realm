import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRecipes = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, data: recipesData, refetch } = useQuery({
        queryKey: ['recipes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/recipes');
            return res.data;
        }
    })
    return [recipesData, isPending , refetch]
};

export default useRecipes;