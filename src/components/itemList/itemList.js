const itemList = ({products}) => {
    return(
        <div class='listgroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default itemList