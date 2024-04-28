/**https://www.youtube.com/watch?v=d5x0JCZbAJs&t 31:23 
 * pnpm run db:studio
*/


import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  const images = await db.query.images.findMany(
    {orderBy:(model,{asc})=>asc(model.id)},
  );

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
        [...images,...images,...images].map((image,index)=>(
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>
              {image.name}
            </div>
          </div>
        ))
      }</div>
    </main>
  );
}
