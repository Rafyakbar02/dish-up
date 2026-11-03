import { HeartIcon } from "./Icons";

type FavButtonProps = {
    onClick: () => void;
    selected: boolean;
}

export default function FavButton({ onClick, selected, ...props }: FavButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-pressed={selected}
            style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            {...props}
        >
            <HeartIcon size={24} filled={selected} color={'var(--cobalt)'} />
        </button>
    )
}
