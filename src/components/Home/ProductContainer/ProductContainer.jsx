import { useState, useEffect } from "react";
const ProductContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getData = async () => {
            const data = await fetch("http://localhost:8080/api/products")
            const result = await data.json()
            setProducts(result.payload)
        }
        getData()
    }, []);
    console.log(products);
    return (
        <div>
            <h3>Recomendados :</h3>
            {products ? <h1>Entro</h1> : <h1>No entro</h1>}
        </div>
    );
}
export default ProductContainer;