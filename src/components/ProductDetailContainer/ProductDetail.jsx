import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail/ProductDetail.jsx";
const ProductDetailContainer = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`http://localhost:8080/api/products/${id}`, { credentials: "include" })
            const result = await data.json()
            if (result) setData(result.payload)
        }
        getData()
    }, []);
    return (
        <>{data && <ProductDetail data={data}></ProductDetail>}</>
    );
}
export default ProductDetailContainer;