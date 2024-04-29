/**https://www.youtube.com/watch?v=d5x0JCZbAJs&t 1:04:22 
 * pnpm run db:studio
 * pnpm dev
 * use vercel . Clerk . uploadthing
*/


import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await db.query.images.findMany(
    {orderBy:(model,{asc})=>asc(model.id)},
  );

  return(
    <div className="flex flex-wrap gap-4">
    {
    images.map((image)=>(
      <div key={image.id} className="flex w-48 flex-col">
        <img src={image.url} />
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
