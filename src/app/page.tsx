/**https://www.youtube.com/watch?v=d5x0JCZbAJs&t 1:56:02 
 * pnpm run db:studio
 * pnpm dev
 * use vercel . Clerk . uploadthing
*/

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images(){

  const images = await getMyImages();

  return(
    <div className="flex justify-center flex-wrap gap-4 p-4">
    {
    images.map((image)=>(
      <div key={image.id} className="flex h-48 w-48 flex-col">
        <Link href={`/img/${image.id}`}>
        <Image 
        src={image.url} 
        style={{objectFit:"contain"}}
        width={192}
        height={192} 
        alt={image.name}/>
        </Link>
        <div>
          {image.name}
        </div>
      </div>
    ))
  }</div>
  )
}

export default async function HomePage() {


  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          請先進行登入驗證!
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
