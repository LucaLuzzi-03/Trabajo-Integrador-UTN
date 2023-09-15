import { Navigate, Route, Routes } from "react-router-dom"
import { ProductsPage } from "../pages/ProductsPage"
import { ProductDetail } from "../pages/ProductDetail"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/products" element={ <ProductsPage /> }/>
      <Route path="/products/:id" element={ <ProductDetail /> }/>
      <Route path="/contact" element={ <ProductsPage /> }/>

      <Route path="/*" element={ <Navigate to="/products" /> }/>

    </Routes>
  )
}
