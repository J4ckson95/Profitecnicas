import { useForm } from "react-hook-form"
import style from "./register.module.css"
const Register = () => {
    const { register, handleSubmit } = useForm()
    const submit = handleSubmit((data) => {
        fetch("http://localhost:8080/api/users/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((data) => console.log(data))
    })
    return (
        <div className={style.register}>
            <div className={style.container}>
                <h2>Registro</h2>
                <form method="POST" onSubmit={submit}>
                    <div>
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" {...register("name", { required: true })}></input>
                    </div>
                    <div>
                        <label htmlFor="lastName">Apellido: </label>
                        <input type="text" {...register("lastName", { required: true })}></input>
                    </div>
                    <div>
                        <label htmlFor="age">Edad: </label>
                        <input type="number" {...register("age", { required: true })}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" {...register("email", { required: true })}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" {...register("password", { required: true })}></input>
                    </div>
                    <div>
                        <label htmlFor="terminos">Acepta los terminos y condiciones</label>
                        <input type="checkbox"{...register("terminos", { required: true })}></input>
                    </div>
                    <button type="submit">Registrarme</button>
                </form>
            </div>
        </div>
    );
}
export default Register;