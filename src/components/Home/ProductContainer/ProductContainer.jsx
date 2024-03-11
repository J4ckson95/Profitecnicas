import { useState, useEffect } from "react";
import Product from "./Product/Product.jsx";
import style from "./productcontainer.module.css"
const ProductContainer = ({ section }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getData = async () => {
            const data = await fetch("http://localhost:8080/api/products")
            const result = await data.json()
            setProducts(result.payload)
        }
        getData()
    }, []);
    return (
        <div className={style.productContainer}>
            <h3>Recomendados : {section ? section : "text"} </h3>
            <div className={style.productList}>
                {products.length > 0 && products.map((element, index) => <Product data={element} key={index}></Product>)}
            </div>
        </div>
    );
}
export default ProductContainer;