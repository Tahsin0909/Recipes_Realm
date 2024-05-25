import './sharedButton.css'
// eslint-disable-next-line react/prop-types
const SharedButton = ({ text }) => {
    return (
        <button className="button">
            {text}
        </button>

    );
};

export default SharedButton;