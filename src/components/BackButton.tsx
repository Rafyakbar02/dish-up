import { Link } from "wouter-preact";
import { BackIcon } from "./Icons";

export default function BackButton({ href, ...props }: { href: string }) {
    return (
        <Link href={href} style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }} {...props}>
            <BackIcon size={24} color={'var(--cobalt)'} />
        </Link>
    )
}
