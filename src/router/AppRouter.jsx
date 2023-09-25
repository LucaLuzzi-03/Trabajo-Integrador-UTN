import { Navigate, Route, Routes } from "react-router-dom"
import { ProductsPage } from "../pages/ProductsPage"
import { ProductDetail } from "../pages/ProductDetail"
import { Principal } from "../pages/Principal"
import { Contact } from "../pages/Contact"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={ <Principal /> }/>
      <Route path="/products" element={ <ProductsPage /> }/>
      <Route path="/products/:id" element={ <ProductDetail /> }/>
      <Route path="/contact" element={ <Contact /> }/>

      <Route path="/*" element={ <Navigate to="/home" /> }/>
    </Routes>
  )
}
