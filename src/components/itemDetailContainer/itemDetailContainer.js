import { useState,useEffect } from "react";
import { getProductById } from '../../asyncMock'
import {itemDetail} from '../item'
import {useParams} from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore' 
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
const [product, setProduct] = useState(null) 
const [loading, setLoading] = useState(true)

const {itemId } = useParams()

useEffect(() => {
setLoading(true)

const docRef = doc(db, 'products', itemId)

getDoc (docRef)
.then(response => {
    const data = response.data()
const productAdapted = { id: response.id, ...data }
 setProduct (productAdapted)
})
.catch(error => {
    console.log(error)
})
.finally(() => {
    setLoading(false)
})

}, [categoryId])


    return(
        <div classname ='itemDetailContainer'>
            <itemDetail {...product}/>
        </div>
    )
}

export default itemDetailContainer