/**https://www.youtube.com/watch?v=d5x0JCZbAJs&t 10:47 */

import Link from "next/link";

const mockUrls= [
  "https://utfs.io/f/189c18ca-8a4a-4645-9f83-fa83d2ce80f3-9hjed0.jpg",
  "https://utfs.io/f/8cf70db0-ee1e-433c-818e-99e7ab0bc749-8pb9lo.jpg",
  "https://utfs.io/f/ecf3a1b4-12da-4cc1-b3aa-bdb9f1f602ca-o9l1tc.jpg",
  "https://www.4gamer.net/games/476/G047609/20240417071/SS/001.jpg",
]

const mockImages = mockUrls.map((url,index)=>({
  id:index+1,
  url,
}))


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
      }</div>
    </main>
  );
}
