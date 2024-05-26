import SharedTitle from "../Shared/SharedTitle/SharedTitle";

const PurchaseCoin = () => {
    return (
        <div className=" pt-24 md:pt-32 md:px-10 px-5">
            <SharedTitle subtitle={'Simple Steps to More Recipes'} title={'Purchase Coin'} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 justify-center items-center w-fit mx-auto lg:gap-10 gap-10 lg:my-10 md:my-8 my-6">
                <div
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 lg:w-[300px]"
                >
                    <div className="p-1 bg-[#2F4F4F] opacity-40"></div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Beginner Plan</h2>
                        <p className="text-gray-600 mb-6">Perfect for new Member</p>
                        <p className="text-4xl font-bold text-[#8B4513] mb-6">$1.00</p>
                        <ul className="text-sm text-gray-600 mb-6">
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 mr-2 text-green-500"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                                100 Coins
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 mr-2 text-green-500"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                                Beginner Features
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 mr-2 text-green-500"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                                No Support
                            </li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <button
                            className="w-full bg-[#2F4F4F] text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
                        >
                            Select Plan
                        </button>
                    </div>
                </div>
                <div
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 lg:w-[300px]"
                >
                    <div className="p-1 bg-[#2F4F4F] opacity-40"></div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Chefs' Plan</h2>
                        <p className="text-gray-600 mb-6">Perfect for growing businesses</p>
                        <p className="text-4xl font-bold text-[#8B4513] mb-6">$5.00</p>
                        <ul className="text-sm text-gray-600 mb-6">
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 mr-2 text-green-500"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                                500 Coins
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 mr-2 text-green-500"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                                Advanced Features
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 mr-2 text-green-500"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                                24/7 Support
                            </li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <button
                            className="w-full bg-[#2F4F4F] text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
                        >
                            Select Plan
                        </button>
                    </div>
                </div>
                <div
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 lg:w-[300px]"
                >
                    <div className="p-1 bg-[#2F4F4F] opacity-40"></div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pro Plan</h2>
                        <p className="text-gray-600 mb-6">Perfect for you</p>
                        <p className="text-4xl font-bold text-[#8B4513] mb-6">$10.00</p>
                        <ul className="text-sm text-gray-600 mb-6">
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 mr-2 text-green-500"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                                1000 Coins
                            </li>
                            <li className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 mr-2 text-green-500"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                                Advanced Features
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 mr-2 text-green-500"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                                Unlimited Support
                            </li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <button
                            className="w-full bg-[#2F4F4F] text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
                        >
                            Select Plan
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default PurchaseCoin;