import React from 'react'

import { toast } from "react-toastify";
import { Card } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount";

export default function Item({ item }) {

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
        <div class="col-3">
            <Card style={{ width: '18rem'}} className="col-2" >
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAddCart}/>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
  )
}
