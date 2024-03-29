import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"
import { Routes, Route } from "react-router-dom"
function App() {



  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
