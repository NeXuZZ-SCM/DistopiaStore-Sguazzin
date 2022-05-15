import React from 'react'

import { toast } from "react-toastify";
import { Card } from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from 'react-router-dom';

export default function Item({item}) {

    const navigate = useNavigate();

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
            <Card style={{ width: '18rem'}} className="col-2">
                <Card.Img variant="top" src={(`../${item.image}`)} onClick={()=> navigate(`/item/${item.id}`)}  style={{cursor:'pointer'}} />
                <Card.Body>
                    <Card.Title onClick={()=> navigate(`/item/${item.id}`)}  style={{cursor:'pointer'}} >{item.title}</Card.Title>
                    <Card.Text>
                        {item.detail}
                    </Card.Text>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAddCart}/>
                </Card.Body>
            </Card>
        </div>
  )
}
