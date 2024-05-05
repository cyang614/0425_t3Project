import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: string }) {
  const idAsNumber = Number(props.id);
  if(Number.isNaN(idAsNumber)) throw new Error("不合法的ID");
    const image = await getImage(idAsNumber);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>創建者:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>上傳日期:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
            <form action={
                async() => {
                    "use server";
                    await deleteImage(idAsNumber);
                }
            }>
          <Button type="submit" variant="destructive">
            刪除
          </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
