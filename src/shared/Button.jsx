import {useNavigate} from "react-router-dom";

function Button({ color = '#45ACB7', text = 'white' }) {
    const navigate = useNavigate();
    let sizeStyle = 'p-2 text-md';

    return (
        <button
            style={{ backgroundColor: color, color: text }}
            onClick={() => navigate('contact')}
            className={`rounded-md ${sizeStyle} cursor-pointer w-full`}>
            Contact us
        </button>
    );
}

export default Button;