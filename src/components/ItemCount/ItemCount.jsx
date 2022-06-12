import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ItemCount ({stock, initial, onAdd}){
    const [count, setCount] = React.useState(initial);

    //#region Componentes de Presentacion 
    const StockButton = ({handleOnClick, text}) => {
        return (
            <Button variant="outline-warning" onClick={handleOnClick}>
                {text}
            </Button>
        )
    }
    const AddButton = () =>{
        return (
            <Button variant="warning" style={AddtoCart} onClick={ () => onAdd("Agregando ", {count})} > 
            Añadir al carrito
            </Button>
        )
    }
    //#endregion Componentes de Presentacion

    //#region Style Buttons
    const master = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const Container = {
        width: '15rem',
        border: '1px solid #E2E2E2'
    };
    const AddCountReduce = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      };
    const AddtoCart = {
        width: '100%',
    };
    //#endregion

    //#region Functions Add Decreace
    const onAddBtn = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    }
    const onDecreaceBtn = () =>{
        if(count > 1){
            setCount(count - 1);
        }
    }
//#endregion

    return (
        <div style={master}>
            <div style={Container}>
                <div style={AddCountReduce}>
                    <StockButton text="-" handleOnClick={onDecreaceBtn}/>
                    {count}
                    <StockButton text="+" handleOnClick={onAddBtn}/>
                </div>
                <AddButton />
            </div>
        </div>
    )
}