import axios from "axios";
import React, {useState,useEffect} from "react";
import { useParams, useNavigate} from "react-router-dom";

const UpdatePage =() =>{

    const {id}= useParams()
    const [productName,setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            const oneItem = res.data 
            setProductName(oneItem.title)
            setPrice(oneItem.price)
            setDescription(oneItem.description)
        })
        .catch(err=>console.log(err))
    },[id])

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`,{title:productName, price:price,description:description})
        .then(res=>{
            navigate('/product')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1> Update Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name</label>
                    <input type="text" name="productName" value={productName}
                    onChange={(e)=>{setProductName(e.target.value)}}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" name="price" value={price} 
                    onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" value={description} 
                    onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}



export default UpdatePage