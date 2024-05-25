/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const SharedTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center md:space-y-4 space-y-2">
            <p className='md:text-4xl text-2xl font-bold text-[#8B4513]'><span>&quot;</span> {title} <span>&quot;</span></p>
            <p className="md:text-lg text-[#2F4F4F] font-bold">{subtitle}</p>
        </div>
    );
};

export default SharedTitle;