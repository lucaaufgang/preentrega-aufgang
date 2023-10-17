const item = ({id,nombre,img,precio,stock}) => {
    return(
        <article className="cardItem">
            <header className="header">
                <h2 className="itemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} classname='itemImg'/>
            </picture>
            <section>
                <p className="info">
                    precio: ${precio}
                </p>
                <p className="info">
                    cantidad disponible: {stock}
                </p>
            </section>
            <footer classname="itemFooter">
               <link to={'/item/${id}'} classname= 'option'>ver detalle</link>
            </footer>
            </article>
    )
}

export default Item