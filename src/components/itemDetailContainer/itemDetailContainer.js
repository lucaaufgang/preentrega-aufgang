import { useState,useEffect } from "react";
import { getProductById } from '../../asyncMock'
import {itemDetail} from '../item'
import {useParams} from 'react-router-dom'

const itemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[itemId])

    return(
        <div classname ='itemDetailContainer'>
            <itemDetail {...product}/>
        </div>
    )
}

export default itemDetailContainer