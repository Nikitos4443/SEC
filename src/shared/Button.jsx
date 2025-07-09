import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Button({ color = '#45ACB7', text = 'white' }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    let sizeStyle = 'p-2 text-md';

    return (
        <button
            style={{ backgroundColor: color, color: text }}
            onClick={() => navigate('contact')}
            className={`rounded-md ${sizeStyle} cursor-pointer w-full`}>
            {t('contactButton')}
        </button>
    );
}

export default Button;