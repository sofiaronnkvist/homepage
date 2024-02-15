import Image from "next/image";
import favicon from "./icon.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="w-full flex gap-10 flex-col">
        <h1 className="text-2xl text-center">Under construction...</h1>
        <div className="w-full flex align-middle justify-center">
          <Image alt="circle" src={favicon} width={200} className="animate-pulse"/>
        </div>
      </div>

    </main>
  );
}
