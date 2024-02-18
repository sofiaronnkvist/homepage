export default function About() {
    return (
        <div className="flex min-h-screen min-w-screen">
            <div className="p-8 flex flex-row items-end">
                <h1 className="text-4xl lg:text-8xl font-libreCaslonText">Ab</h1>
                <h1 className="text-4xl lg:text-8xl font-poppins">out</h1>
            </div>
            <div className="flex justify-center flex-col gap-8">
                <div>
                    <p className="font-poppins text-md">Hi, I&apos;m Sofia. A full-stack developer from Sweden based in Berlin.</p>
                </div>
                <div>
                    <p className="font-libreCaslonText text-lg">Core tools</p>
                    <ul>
                        <li className="font-poppins text-md">TypeScript</li>
                        <li className="font-poppins text-md">Node.js</li>
                        <li className="font-poppins text-md">React</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}