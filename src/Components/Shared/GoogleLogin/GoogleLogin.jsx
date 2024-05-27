import { useContext } from "react";
import { AuthContext } from "../../../Context/ContextApi";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const GoogleLogin = () => {
    const { GoogleSignUp, AuthUser, LogOut } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const handleGoogle = () => {
        GoogleSignUp()
            .then(result => {
                const User = {
                    coin: 50,
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoUrl: result.user.photoURL,
                }
                toast.success(`Authenticating as ${result.user.email}`, {
                    id: 'logIn',
                })
                axiosPublic.post(`/users/${result.user.email}`, User)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.insertedId || (res.data.modifiedCount > 0 || res.data.matchedCount > 0)) {
                            toast.success(`Authenticating as ${result.user.email}`, {
                                id: 'logIn',
                            })
                        }
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    id: 'Error',
                })
            });
    }
    return (
        <div className="space-x-6 flex items-center">
            {
                AuthUser ? <img onClick={() => {
                    LogOut(), toast.success(`Log Out Successful`, {
                        id: 'log Out',
                    })
                }} className="lg:w-10 lg:h-10 w-8 h-8  transition-all delay-100" src="https://i.ibb.co/gd4f9RD/logout-7884039-removebg-preview.png" alt="" />
                    : <FcGoogle onClick={handleGoogle} className="md:text-4xl text-3xl hover:scale-[1.2] transition-all delay-100" />
            }
            {
                AuthUser && <img className="lg:w-14 lg:h-14 w-8 h-8  rounded-full" src={AuthUser?.profileImage} alt="" />
            }
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default GoogleLogin;