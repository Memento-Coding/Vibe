import "../Styles/login.css";
import imagen from '../img/wave-sound.png';
import { Link,useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../context/AuthContext";

export function Login() {
  
  const navigate = useNavigate();
  const { saveTokenToLocalStorage } = useContext(AuthContext);
  const [emailOrUser, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

 

// ...



const handleSubmit = async (e) => {
  e.preventDefault();
  setError(""); // Reiniciar el mensaje de error

  if (emailOrUser === "" || password === "") {
    setError("Todos los campos son obligatorios.");
    return;
  }

  try {
    // Objeto con los datos dinicio de sesión
    const datosLogin = {
      emailOrUser,
      password,
    };

    
    const response = await axios.post("https://thriving-insect-production.up.railway.app/v1/login/", datosLogin, {
      headers: {
        "Access-Control-Allow-Origin": "*", // o puedes especificar un origen específico en lugar de "*"
      },
    });

    const token = response.data.token;
    saveTokenToLocalStorage(token);
    
      navigate("/inicio");
    
    
    

    // Restablecer los campos del formulario
    setUser("");
    setPassword("");
    
  } catch (error) {
    console.error(error); // Manejar errores en la petición
  }
};


  return (
    <div>
      <div className="login-container">
        <div className="container-vibe">
          <img className="image" src={imagen} alt="Imagen" />
          <div className="title-logo">Vibe</div>
        </div>

        <div className="form-container">
          <div className="title">Iniciar sesion con Vibe</div>
          <div className="google">
            
          </div>
          <div class="crossed-lines"></div>

          <div className="form">
            <form>
              <div className="input-container">
                <label className="email">Email o nombre de usuario: </label>
                <input
                  type="text"
                  value={emailOrUser}
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
              </div>
              <div className="input-container">
                <label className="password">Contraseña:</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="button-container">
                <Link to="/inicio">
                  <button onClick={handleSubmit} type="button">
                    Iniciar Sesion
                  </button>
                </Link>
              </div>
            </form>
            {error && <p>{error}</p>} 
          </div>
          <div class="crossed-lines"></div>

          <a href="/register"  className="linkregister" >
            ¿No tienes cuenta? Registrate aqui
          </a>
        </div>
      </div>
    </div>
  );
}
