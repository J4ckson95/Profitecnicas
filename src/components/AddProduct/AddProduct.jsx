import { useForm } from "react-hook-form"
import style from "./addproduct.module.css"
const AddProduct = () => {
    const { register, handleSubmit } = useForm()
    const submit = handleSubmit((data) => {
        fetch("http://localhost:8080/api/products/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        }).then((res) => res.json()).then((data) => {
            const { status } = data
            console.log(status);
        })
    })
    return (
        <div className={style.containerAddproduct}>
            <h2>Agregar Producto</h2>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="title">Titulo del libro:</label>
                    <input type="text" {...register("title", { required: true, })}></input>
                </div>
                <div>
                    <label htmlFor="author">Autor del libro:</label>
                    <input type="text" {...register("author", { required: true })}></input>
                </div>
                <div>
                    <label htmlFor="description">Descripción del libro:</label>
                    <input type="text" {...register("description", { required: true })}></input>
                </div>
                <div>
                    <label htmlFor="genre">Genero del libro:</label>
                    <input type="text" {...register("genre", { required: true })}></input>
                </div>
                <div>
                    <label htmlFor="price">Precio del libro:</label>
                    <input type="number" {...register("price", { required: true, valueAsNumber: true })}></input>
                </div>
                <div>
                    <label htmlFor="thumbnail">Link de la imagen del libro:</label>
                    <input type="text" {...register("thumbnail", { required: true })}></input>
                </div>
                <div>
                    <label htmlFor="code">Codigo del libro:</label>
                    <input type="number" {...register("code", { required: true, valueAsNumber: true })}></input>
                </div>
                <div>
                    <label htmlFor="stock">Stock del libro:</label>
                    <input type="number" {...register("stock", { required: true, valueAsNumber: true })}></input>
                </div>
                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    );
}
export default AddProduct;