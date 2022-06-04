import React from "react"
import { CartContext } from "../CartCustomProvider/CartCustomProvider"

export default function CartWidget(){
    const {totalItems } = React.useContext(CartContext);

    return (
        <>
        <i className="bi bi-bag" />
        {totalItems === 0 ? 
                    ""
                  : 
                  totalItems
        }
        </>
    )

}