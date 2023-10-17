import {useState} from 'react'

const Producto = ({stock,initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const aumento = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
        else (quantity >= stock);{
            alert('ya tienes el maximo de stock aceptable');
        }
    }

    const decrecimiento = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
        else (quantity = 1);{
            alert('ya tienes el minimo de stock en el carrito')
        }
    }
    return(
        <div className='caja'>
            <div className='control'>
                <button className='boton' onClick={decrecimiento}>-</button>
                <h4 className='numero'>{quantity}</h4>
                <button className='boton' onClick={aumento}>-</button>
            </div>
            <div>
                <button className='button' onClick={() => onAdd(quantity)} disabled={!stock}>agregar al carrito</button>
            </div>
        </div>
    )
}
