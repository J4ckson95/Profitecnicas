import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./pageuser.module.css"
const PageUser = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const getUser = async () => {
            const data = await fetch(`http://localhost:8080/api/users/getuser`, {
                credentials: "include"
            })
            const result = await data.json()
            setUser(result.data)
        }
        getUser()
    }, []);
    return (
        <div className={style.pageContainer}>
            <h3>Nombre: <strong>{user.first_name}</strong></h3>
            <h3>Apellidos: <strong>{user.last_name}</strong></h3>
            <h3>Correo: <strong>{user.email}</strong></h3>
            {user.rol === "admin" && <Link className={style.button} to={"/addproduct"}>agregar producto</Link>}
        </div>
    );
}

export default PageUser;