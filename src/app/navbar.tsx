import Link from "next/link";
import linkImage from "./linkImage.svg"
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex w-full fixed nav justify-center gap-4 font-poppins text-lg top-3">
            <Link className="hover:animate-pulse font-poppins" href="#header">Index</Link>
            <div className="flex gap-1">
                <Link className="hover:animate-pulse font-serif italic" target="_blank" href="https://github.com/sofiaronnkvist">Projects</Link>
                <Image src={linkImage} alt="Link" width={12} height={12}/>
            </div>
            <Link className="hover:animate-pulse font-poppins" href="#contact">Contact</Link>
        </nav>
    );
}