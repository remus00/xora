import { cn } from '../utils/cn';
import Marker from './Marker';

interface Props {
    children: React.ReactNode;
    icon?: string;
    href?: string;
    className?: string;
    onClick?: () => void;
    markerFill?: string;
}

const Button = ({ children, icon, href, className, onClick, markerFill }: Props) => {
    const InnerComponent = () => (
        <>
            <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
                <span className="absolute -left-[1px]">
                    <Marker fill={markerFill} />
                </span>
                {icon && (
                    <img
                        src={icon}
                        alt="image"
                        className="z-10 mr-5 size-10 object-contain"
                    />
                )}
                <span className="base-bold relative z-2 font-poppins uppercase text-p1">
                    {children}
                </span>
            </span>

            <span className="glow-before glow-after" />
        </>
    );

    return href ? (
        <a
            href={href}
            className={cn('g5 group relative rounded-2xl p-0.5 shadow-500', className)}
        >
            <InnerComponent />
        </a>
    ) : (
        <button
            className={cn('g5 group relative rounded-2xl p-0.5 shadow-500', className)}
            onClick={onClick && onClick}
        >
            <InnerComponent />
        </button>
    );
};

export default Button;
