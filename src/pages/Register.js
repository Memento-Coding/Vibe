import "../Styles/register.css"
import {Link } from "react-router-dom";
import imagen from '../img/wave-sound.png';
import { useState } from "react";
import axios from "axios";



export function Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setNameUser] = useState("");
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reiniciar el mensaje de error

    if (email === "" || password === "" || username === "") {
      setError("Todos los campos son obligatorios");
      return; // Detener la ejecución si hay campos vacíos
    }

    try {
      // Objeto con los datos de registro
      const datosRegistro = {
        email,
        password,
        username,
      };

      // Realizar la petición POST a la API
      const response = await axios.post("https://thriving-insect-production.up.railway.app/v1/register", datosRegistro);

      console.log(response.data); // Manejar la respuesta de la API

      // Restablecer los campos del formulario
      setEmail("");
      setPassword("");
      setNameUser("");
    } catch (error) {
      console.error(error); // Manejar errores en la petición
    }
  }



    return(
        <section>
            <div className="login-container1">
                <div className="container-vibe1">
                    <img className="image1" src={imagen} alt="Imagen" />
                    <div className="title-logo1">Vibe</div>
                    
                </div>
                

                <div className="form-container1">
                  <div className="title1">Registrate gratis para escuchar.</div>
                  
                  <div class="crossed-lines1"></div>
                    
                    <div className="form1">
                        <form>
                            <div className="input-container1">
                                <label className="email">¿Cual es tu correo eletronico? </label>
                                <input type="text"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 required />
                            </div>
                            <div className="input-container1">
                                <label className="password">Crea una contraseña</label>
                                <input type="password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 required />
                            </div>
                            <div className="input-container1">
                                <label className="password">¿Como quieres que te llamemos?</label>
                                <input type="text"
                                 value={username}
                                 onChange={(e) => setNameUser(e.target.value)}
                                required />
                            </div>
                            <div className="button-container1">
                              <Link to="/login">
                               <button onClick={handleSubmit} type="button">Registrate</button>
                              </Link>
                            </div>
                        </form>
                        {error && <p className="errorRegister">{error}</p>} 
                    </div>
                    <div class="crossed-lines1"></div>

                    <a href="/" className="linkregister1" >¿Ya tienes cuenta? Iniciar sesion</a>
                    
                    

                        
                    
                </div>

                
            </div>
            
        </section>
    )
}