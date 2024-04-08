import { useEffect, useState } from "react";
import Product from "../Home/ProductContainer/Product/Product";
import style from "./library.module.css"
const Library = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState({
        page: 1,
        hasPrevPage: false,
        hasNextPage: false
    })
    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`http://localhost:8080/api/products?limit=9&page=${page.page}`, {
                credentials: "include"
            })
            const result = await data.json()
            setData(result.payload)
            setPage({
                page: result.page,
                hasPrevPage: result.hasPrevPage,
                hasNextPage: result.hasNextPage,
            })
        }
        getData()
    }, [page.page]);
    return (
        <div className={style.libraryContainer}>
            <div className={style.products}>
                {data.length > 0 && data.map((element, index) => <Product data={element} key={index}></Product>)}
            </div>
            <div className={style.page}>
                {page.hasPrevPage && <button onClick={() => setPage(prevPage => ({ ...prevPage, page: prevPage.page - 1 }))}>Anterior</button>}
                <p>Pagina:  {page.page}</p>
                {page.hasNextPage && <button onClick={() => setPage(prevPage => ({ ...prevPage, page: prevPage.page + 1 }))}>Siguiente</button>}
            </div>
        </div>
    );
}

export default Library;