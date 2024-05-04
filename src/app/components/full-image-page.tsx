import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props:{id:number}){
    const image = await getImage(props.id);
    const uploaderInfo = await clerkClient.users.getUser(image.userId);
    return (
            <div className="flex h-full w-full min-w-0">
                <div className="flex-shrink flex items-center justify-center">
                    <img src={image.url} className="flex-shrink object-contain" />
                </div>
            
                <div className="flex w-48 flex-col flex-shrink-0 border-l">
                    <div className="border-b p-2 text-center text-lg">{image.name}</div>
                    <div className="flex flex-col p-2">
                        <span>創建者:</span>
                        <span>{uploaderInfo.fullName}</span>
                    </div>
                    <div className="flex flex-col p-2">
                        <span>上傳日期:</span>
                        <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
    )
}