import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetail.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Library from "./components/Library/Library.jsx"
import PageUser from "./components/PageUser/PageUser.jsx"
import AddProduct from "./components/AddProduct/AddProduct.jsx"
import { Routes, Route } from "react-router-dom"
import Payment from "./components/Payment/Payment.jsx"
function App() {



  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/product/:id" element={<ProductDetailContainer></ProductDetailContainer>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/library" element={<Library></Library>}></Route>
        <Route path="/user" element={<PageUser></PageUser>}></Route>
        <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/payment" element={<Payment></Payment>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
