import React, {useEffect,useState} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const ProductDetails =() =>{
    const{id} = useParams()
    const [item,setItem] = useState()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            setItem(res.data)
        }
        )
        .catch(err=>console.log(err))
    },[id])
    return (
        <div>
            <h1>Product Details</h1>
            {
                item?
                <div>
                    <h1>{item.title}</h1>
                    <h4>{item.price}</h4>
                    <h4>{item.description}</h4>
                </div>:
                <h1>Loading...</h1>
            }
        </div>
    )
}



export default ProductDetails