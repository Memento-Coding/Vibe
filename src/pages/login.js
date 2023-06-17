import "../Styles/login.css"
import imagen from '../img/wave-sound.png';
import { NavLink } from "react-router-dom";

export function Login(){
    return(
        <div>
            <div className="login-container">
                <div className="container-vibe">
                    <img className="image" src={imagen} alt="Imagen" />
                    <div className="title-logo">Vibe</div>
                    
                </div>
                

                <div className="form-container">
                  <div className="title">Iniciar sesion con Vibe</div>
                  <div class="crossed-lines"></div>
                    
                    <div className="form">
                        <form>
                            <div className="input-container">
                                <label className="email">Email o nombre de usuario: </label>
                                <input type="text" required />
                            </div>
                            <div className="input-container">
                                <label className="password">Contraseña:</label>
                                <input type="password" required />
                            </div>
                            <div className="button-container">
                               <button type="button">Iniciar Sesion</button>
                            </div>
                        </form>
                    </div>
                    <div class="crossed-lines"></div>

                    <NavLink className="linkregister" to="/register">¿No tienes cuenta? Registrate aqui</NavLink>
                    
                    

                        
                    
                </div>

                
            </div>

            
            
        </div>
    )
}