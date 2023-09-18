/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import "./styles/productsPage.css"
import { Filter } from '../components/Filter'
import { Search } from '../components/Search'



export const ProductsPage = () => {

  const [products, setProducts] = useState([])
  const [productsFiltered, setProductsFiltered] = useState([])
  const [productsCategory, setProductsCategory] = useState("all")

  const getAllProducts = async() => { 
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json() 
    return data    
  }
  
  const getProducts = async() => {
    const data = await getAllProducts()
    setProducts(data)
    setProductsFiltered(data)
  }

  const handleCategory = ( inputValue ) => {
    setProductsCategory( inputValue )
  }

  const handleSearch = ( inputValue ) => {
    setProductsFiltered( products.filter(
      product => product.title.toLowerCase().includes( inputValue.toLowerCase() )) )
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <>
      <div className='inputsxd'>  
      <Search onHandleSearch={ handleSearch } />
      <Filter onHandleCategory={ handleCategory } />
      </div>
      <div className='newArrivals'> 
        <h1>Productos</h1> 
      </div>
      <div className='borde'></div>
      <div className='cardContainer'> 
        {
          productsFiltered
            .filter( product => {
              if (productsCategory === "all") return product
              return product.category === productsCategory
            })
            .map(product =>  <ProductCard key={product.id} {...product}/> )
        }
      </div>
    </>
)
}
