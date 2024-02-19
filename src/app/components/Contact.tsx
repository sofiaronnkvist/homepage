import Link from "next/link";
import linkImage from "../linkImage.svg"
import Image from "next/image";

export default function Contact() {
    return (
        <div className="flex min-h-screen min-w-screen">
            <div className="p-16 md:p-8 flex flex-row items-end">
                <h1 className="text-4xl lg:text-8xl font-serif italic">Contact</h1>
            </div>
            <div className="flex justify-center flex-col">
                <div className="flex flex-col">
                    <Link className="font-poppins" href="mailto:sofia&#64;ronnkvist&#46;com">sofia&#64;ronnkvist&#46;com</Link>
                    <div className="flex gap-1">
                        <Link className="font-poppins" target="_blank" href="https://www.linkedin.com/in/sofia-r%C3%B6nnkvist-509087110/">LinkedIn</Link>
                        <Image src={linkImage} alt="Link" width={12} height={12}/>
                    </div>
                </div>
            </div>
        </div>
    );
}