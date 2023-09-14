import react, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import "./styles/productsPage.css"



export const ProductsPage = () => {

  const [products, setProducts] = useState([])

  const getAllProducts = async() => { 
    const response = await fetch("https://fakestoreapi.com/products?limit=5")
    const data = await response.json() 
    return data    
  }

  const getSomeProducts = async() => { 
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json() 
    return data    
  }
  
  const getProducts = async() => {
    const data = await getAllProducts()
    setProducts(data)
  }

  const getProducts2 = async() => {
    const dato = await getSomeProducts()
    setProducts(dato)
  }


  useEffect(() => {
    getProducts()
    getProducts2()
  }, [])
  
  return (
    <>
      <h1>Products</h1>
      <hr/>
      <div className='newArrivals'> 
      <h1>New Arrivals</h1> 
      </div>
      <div className='borde'></div>
    <div className='cardContainer'> 
      {
        products.map(product =>  <ProductCard key={product.id} {...product}/> )
      }
      </div>
    </>
)
}
