import React from "react";

export function Login() {
    return(
        <div>
            <form>
                <label>Usuario</label>
                <input typeof="text"></input>
                <label>Contraseña</label>
                <input typeof="password"></input>
                <button typeof="submit">Ingresar</button>
            </form>
            <button>Ingresar con Google</button>
            <button>Ingresar con Facebook</button>
            
        </div>
    )
}