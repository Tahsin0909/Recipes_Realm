import { useContext } from "react";
import { AuthContext } from "../../../Context/ContextApi";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    const { GoogleSignUp, AuthUser, LogOut } = useContext(AuthContext)
    const handleGoogle = () => {
        GoogleSignUp()
            .then(result => {
                const User = {
                    coin: 50,
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoUrl: result.user.photoURL,
                }
                // axiosPublic.patch(`/users/${result.user.email}`, User)
                //     .then(res => {
                //         console.log(res.data);
                //         if (res.data.insertedId || (res.data.modifiedCount > 0 || res.data.matchedCount > 0)) {
                //             toast.success(`Authenticating as ${result.user.email}`)
                //             localStorage.setItem('ToastShowed', JSON.stringify('false'))
                //             location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
                //         }
                //     })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className="space-x-6 flex items-center">
            {
                AuthUser ? <img onClick={LogOut} className="w-8 h-8  transition-all delay-100" src="https://i.ibb.co/gd4f9RD/logout-7884039-removebg-preview.png" alt="" />
                    : <FcGoogle onClick={handleGoogle} className="md:text-4xl text-3xl hover:scale-[1.2] transition-all delay-100" />
            }
            {
                AuthUser && <img className="w-8 h-8 rounded-full" src={AuthUser?.profileImage} alt="" />
            }
        </div>
    );
};

export default GoogleLogin;