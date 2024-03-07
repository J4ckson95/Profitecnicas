import { useState, useEffect } from "react";
const ProductContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(
        async () => {
            const data = await fetch("localhost:/api/products")
            setProducts(data)
        }, []);
    return (
        <div>
            <h3>Recomendados :</h3>
            {products ? <h1>Entro</h1> : <h1>No entro</h1>}
        </div>
    );
}
export default ProductContainer;