import { useContext, useState } from "react";
import itemCount from '../itemCount/itemCount'
import { Link } from "react-router-dom";

const itemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,name,price
        }

        addItem(item,quantity)
    }

    return (
        <article className="cardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    categoria : {category}
                </p>
                <p className="Info">
                    descripcion : {description}
                </p>
                <p className="Info">
                    precio : {price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <link to='/cart' className="Option">terminar compra</link>
                    ) : (
                        <itemCount initial={1} stock={stock} onAdd={handleOnAdd}></itemCount>
                    )
                }
            </footer>
        </article>
    )
}
export default itemDetail