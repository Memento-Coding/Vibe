import "../Styles/register.css"
import { NavLink, Link } from "react-router-dom";
import imagen from '../img/wave-sound.png';
import GoogleLogin from 'react-google-login';
import { useState } from "react";

const responseGoogle = (response) => {
    console.log(response);
  }

export function Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [error, setError] = useState(""); 


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(nameUser)

    if (email === "" || password === "" || nameUser==="") {
      setError("Todos los campos son obligatorios"); 
    }
  };



    return(
        <section>
            <div className="login-container1">
                <div className="container-vibe1">
                    <img className="image1" src={imagen} alt="Imagen" />
                    <div className="title-logo1">Vibe</div>
                    
                </div>
                

                <div className="form-container1">
                  <div className="title1">Registrate gratis para escuchar.</div>
                  <div className="google-register">
                    <GoogleLogin className="ast"
                            clientId="289577942642-hu6ead6b56bm76hpsd2gdp3hil3i4k2o.apps.googleusercontent.com"
                            buttonText="Registrate con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                    />
                  </div>
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
                                 value={nameUser}
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

                    <NavLink className="linkregister1" to="/login">¿Ya tienes cuenta? Iniciar sesion</NavLink>
                    
                    

                        
                    
                </div>

                
            </div>
            
        </section>
    )
}