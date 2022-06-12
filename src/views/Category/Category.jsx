import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

export default function Category(){

    const {categoryId} = useParams();

  return ( 
     <ItemListContainer categoryId={+categoryId}/>
  )
}

