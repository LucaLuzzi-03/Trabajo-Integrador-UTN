/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ProductCard } from '../components/ProductCard'
import "./styles/destacados.css"

import img1 from "../assets/imagen1.avif"
import img2 from "../assets/imagen2.avif"
import img3 from "../assets/imagen3.avif"


export const Destacados = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  const getAllProducts = async() => { 
    const response = await fetch("https://fakestoreapi.com/products?limit=5")
    const data = await response.json() 
    return data    
  }
  
  const getProducts = async() => {
    const data = await getAllProducts()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
        <div className="imgContainer">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
    <h1 className='text-center pt-3 '> Featured products </h1>
    <div className='cardContainer'>
    {
          products
            .map(product =>  <ProductCard key={product.id} {...product}/> )
        }
    </div>
    <div className="allProducts">
      <div className="botonProduct"> 

      <button
        onClick={ () => navigate("/products") }
      >
        All Products
      </button>
      
      </div>
    </div>
    </>
  )
}
