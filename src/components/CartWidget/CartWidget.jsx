import React from "react"
import { CartContext } from "../CustomProvider/CustomProvider"

export default function CartWidget({Count}){
    const { carrito } = React.useContext(CartContext);
    return (
        <>
        <i className="bi bi-bag" />
        {carrito.length}
        </>
    )

}