import "../Styles/register.css"
import { NavLink } from "react-router-dom";
import imagen from '../img/wave-sound.png';

export function Register(){
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
                                <input type="text" required />
                            </div>
                            <div className="input-container1">
                                <label className="password">Crea una contraseña</label>
                                <input type="password" required />
                            </div>
                            <div className="input-container1">
                                <label className="password">¿Como quieres que te llamemos?</label>
                                <input type="password" required />
                            </div>
                            <div className="button-container1">
                               <button type="button">Registrate</button>
                            </div>
                        </form>
                    </div>
                    <div class="crossed-lines1"></div>

                    <NavLink className="linkregister1" to="/login">¿Ya tienes cuenta? Iniciar sesion</NavLink>
                    
                    

                        
                    
                </div>

                
            </div>
            
        </section>
    )
}