import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoModal({
    params:{id:photoId},
}:{
    params:{id:string};
}){
    const idAsNumber = Number(photoId);
    if(Number.isNaN(idAsNumber)) throw new Error("不正確的照片id");

    return (
        <Modal>
            <FullPageImageView id={idAsNumber} />
        </Modal>
    )
}