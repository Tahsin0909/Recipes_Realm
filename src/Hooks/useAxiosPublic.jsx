import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://recipes-realm-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;