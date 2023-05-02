import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreatePage =() =>{
    const [productName,setProductName] = useState("")
    const [price, setPrice] = useState(9.99)
    const [description,setDescription] = useState("")
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        const newItem ={title:productName, price:price,description:description}
        axios.post("http://localhost:8000/api/product",newItem)
        .then(response=>{
            console.log(response)
            navigate("/product")
        })
        .catch(err=>{
            console.log(err)
        }
        )
    }

    return (
        <div>
            <h1> Add a Product</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Product Name</label>
                    <input type="text" name="productName" value={productName} 
                    onChange={e=>setProductName(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label>
                    <input type="text" name="price" value={price} 
                    onChange={e=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" name="description" value={description} 
                    onChange={e=>setDescription(e.target.value)}/>
                </p>
                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}



export default CreatePage