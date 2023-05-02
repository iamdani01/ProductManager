import React, {useEffect, useState} from "react";
import axios from "axios"
import { Link, useNavigate} from "react-router-dom";

const DashboardPage =() =>{
    const [productList,setProductList] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then(response=>{
            console.log(response.data)
            setProductList(response.data)
        })
        .catch(err=>console.log(err))
    },[])
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
    const handleDelete=(deleteId)=>{
        axios.delete(`http://localhost:8000/api/product/${deleteId}`)
        .then(res=>{
            
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <div>
                <h1> Product List</h1>
                <ol>
                    {
                        productList.map((eachItem, idx)=>(
                            <li key={idx}>{eachItem.title} <Link to={`/product/${eachItem._id}`}>View</Link><Link to={`/product/${eachItem._id}/edit`}>Edit</Link><button onClick={(e)=>handleDelete(eachItem._id)}>Delete</button></li>
                            
                        ))
                    }
                </ol>
            </div>
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
        </div>
    )
}



export default DashboardPage