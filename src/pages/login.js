import "../Styles/login.css";
import imagen from '../img/wave-sound.png';
import { Link,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

export function Login() {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const handelLogin =async () =>{
    await login();
    navigate('/inicio')
  }


  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(user);
    //console.log(password);
    

    if (user === "" || password === "") {
      setError("Todos los campos son obligatorios"); // Establece el mensaje de error en el estado error
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
            <button onClick={handelLogin}><FaGoogle/>Google</button>
          </div>
          <div class="crossed-lines"></div>

          <div className="form">
            <form>
              <div className="input-container">
                <label className="email">Email o nombre de usuario: </label>
                <input
                  type="text"
                  value={user}
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
