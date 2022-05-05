import ItemCount from "../ItemCount/ItemCount";
import { toast } from "react-toastify";

export default function ItemListContainer ({greeting}){

    //#region Alert TOAST
    const onAddCart = (messege, {count}) => {
        toast(` ${messege} ${count} al carrito`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    //#endregion

    return (
        <>
            {greeting}
            <br/>
            <ItemCount stock={5} initial={1} onAdd={onAddCart}/>
        </>
    )
}