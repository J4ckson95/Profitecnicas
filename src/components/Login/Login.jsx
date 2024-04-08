import style from "./login.module.css"
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useState } from "react";
const Login = () => {
    const [redirect, setRedirect] = useState(false)
    const { register, handleSubmit } = useForm()
    const handleSession = handleSubmit((data) => {
        fetch("http://localhost:8080/api/users/login",
            {
                method: "POST",
                body: JSON.stringify(data),
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json()).then((data) => {
                if (data.status === 200) setRedirect(true)
            })
    })
    return (
        <div className={style.loginContainer}>
            <div className={style.login}>
                <h2>Iniciar Sesion</h2>
                <form onSubmit={handleSession}>
                    <label>Email :</label>
                    <input type="text" id="email" {...register("email", { required: true })}></input>
                    <label>Contraseña :</label>
                    <input type="password" id="password" {...register("password", { required: true })}></input>
                    <button type="submit" className={style.session}>Inciar Sesion</button>
                </form>
                <a href="http://localhost:8080/api/users/login/google">
                    <button >Inicia Sesion con Google</button>
                </a>
                <p>No tienes cuenta <Link to={"/register"}>Registrate</Link> </p>
            </div>
            {redirect && <Navigate to={"/"}></Navigate>}
        </div>
    );
}

export default Login;