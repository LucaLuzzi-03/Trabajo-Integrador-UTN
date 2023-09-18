import { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import "./styles/destacados.css"


export const Destacados = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = async() => { 
    const response = await fetch("https://fakestoreapi.com/products?limit=5")
    const data = await response.json() 
    return data    
  }
  
  const getProducts = async() => {
    const data = await getAllProducts()
    setProducts(data)
    setProductsFiltered(data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
    <h1 className='text-center pt-3 '> Featured products </h1>
    <div className='cardContainer'>
    {
          products
            .map(product =>  <ProductCard key={product.id} {...product}/> )
        }
    </div>
    <div className="allProducts">
      <div className="botonProduct"> 
      <button>All Products</button>
      </div>
    </div>
    </>
  )
}
