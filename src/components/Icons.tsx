// 24x24 stroke icons. Decorative: wrap them in a button that has an aria-label.
function Svg({ size = 20, color = 'currentColor', strokeWidth = 1.8, fill = 'none', children }) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{
                width: size,
                height: size,
                fill,
                stroke: color,
                strokeWidth,
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
            }}
        >
            {children}
        </svg>
    );
}

export const BackIcon = ({ size = 26, color }) => (
    <Svg size={size} color={color} strokeWidth={2}>
        <path d="M20 12H5" />
        <path d="M11 6L5 12L11 18" />
    </Svg>
);

export const HeartIcon = ({ size = 22, color = 'currentColor', filled = false }) => (
    <Svg size={size} color={color} fill={filled ? color : 'none'}>
        <path d="M12 20.5C5 15.5 3 11.8 3 8.9C3 6.2 5 4.5 7.3 4.5C9.1 4.5 10.6 5.5 12 7.4C13.4 5.5 14.9 4.5 16.7 4.5C19 4.5 21 6.2 21 8.9C21 11.8 19 15.5 12 20.5Z" />
    </Svg>
);

export const BagIcon = ({ size = 22, color }) => (
    <Svg size={size} color={color}>
        <path d="M5 8H19L18 20H6Z" />
        <path d="M9 8V6A3 3 0 0 1 15 6V8" />
    </Svg>
);

export const CloseIcon = ({ size = 20, color }) => (
    <Svg size={size} color={color} strokeWidth={2}>
        <path d="M6 6L18 18" />
        <path d="M18 6L6 18" />
    </Svg>
);

export const CheckIcon = ({ size = 20, color, strokeWidth = 2.2 }) => (
    <Svg size={size} color={color} strokeWidth={strokeWidth}>
        <path d="M5 12.5L10 17.5L19 7" />
    </Svg>
);

export const StarIcon = ({ size = 24, color, filled = false }) => (
    <Svg size={size} color={color} fill={filled ? color : 'none'}>
        <path d="M12 3.5L14.6 9.2L20.8 9.8L16.1 13.9L17.5 20L12 16.8L6.5 20L7.9 13.9L3.2 9.8L9.4 9.2Z" />
    </Svg>
);

export const HomeIcon = ({ size = 20 }) => (
    <Svg size={size}>
        <path d="M4 11L12 4L20 11" />
        <path d="M6 10V20H18V10" />
    </Svg>
);

export const PlanIcon = ({ size = 20 }) => (
    <Svg size={size}>
        <path d="M4 6H20V20H4Z" />
        <path d="M4 11H20" />
        <path d="M8 3V8" />
        <path d="M16 3V8" />
    </Svg>
);

export const LogIcon = ({ size = 20 }) => (
    <Svg size={size}>
        <path d="M6 4H18V20H6Z" />
        <path d="M9 9H15" />
        <path d="M9 13H15" />
        <path d="M9 17H12" />
    </Svg>
);
