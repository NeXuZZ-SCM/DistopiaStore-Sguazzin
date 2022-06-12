import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Item({item}) {

    const navigate = useNavigate();


  return (
        <div className="col col-lg-6 col-xl-3" style={{ height: '80vh'}}>
            <Card style={{ width: '18rem'}} className="col-2">
                <Card.Img variant="top" src={(`../${item.image}`)} onClick={()=> navigate(`/item/${item.id}`)}  style={{cursor:'pointer'}} />
                <Card.Body>
                    <Card.Title onClick={()=> navigate(`/item/${item.id}`)}  style={{cursor:'pointer'}} >{item.title}</Card.Title>
                    <Card.Text>
                        {item.detail}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
  )
}
