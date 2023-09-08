import { Navigate, Route, Routes } from "react-router-dom"
import { ProductsPage } from "../pages/ProductsPage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <ProductsPage /> }/>

      <Route path="/*" element={ <Navigate to="/" /> }/>
    </Routes>
  )
}
