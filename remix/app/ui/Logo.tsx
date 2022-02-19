import { faLockKeyhole } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Properties {
    className?: string;
}

export const Logo = ({ className }: Properties) => {
    return (
        <div className={'flex items-center ' + className}>
            <FontAwesomeIcon icon={faLockKeyhole} size="3x" className="mr-3 text-indigo-500" />

            <span className="text-3xl font-bold font-montserrat-alt leading-7">
                Simple<br />Auth
            </span>
        </div>
    );
}