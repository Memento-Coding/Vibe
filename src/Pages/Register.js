import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagen from "../img/wave-sound.png";
import "../Styles/register.css";
import axios from "axios";
import { Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "blue",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3, 4),
    outline: "none",
    textAlign: "center",
  },
  message: {
    color: "white",
    width: "55%",
    fontSize: 18,
  },
  buttom:{
    background: "orange",
  },
}));

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setNameUser] = useState("");
  const [error, setError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    navigate("/");
  };

  const handleRedirect = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponseMessage("");

    if (email === "" || password === "" || username === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const datosRegistro = {
        email,
        password,
        username,
      };

      const response = await axios.post(
        "https://thriving-insect-production.up.railway.app/v1/register",
        datosRegistro
      );

      setResponseMessage(response.data.message);
      handleModalOpen();

      setEmail("");
      setPassword("");
      setNameUser("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="login-container1">
        <div className="container-vibe1">
          <img className="image1" src={imagen} alt="Imagen" />
          <div className="title-logo1">Vibe</div>
        </div>

        <div className="form-container1">
          <div className="title1">Registrate gratis para escuchar.</div>

          <div className="crossed-lines1"></div>

          <div className="form1">
            <form>
              <div className="input-container1">
                <label className="email">¿Cuál es tu correo electrónico? </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-container1">
                <label className="password">Crea una contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-container1">
                <label className="password">¿Cómo quieres que te llamemos?</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setNameUser(e.target.value)}
                  required
                />
              </div>
              <div className="button-container1">
                <button onClick={handleSubmit} type="button">
                  Regístrate
                </button>
              </div>
            </form>
            {error && <p className="errorRegister">{error}</p>}
          </div>
          <div className="crossed-lines1"></div>

          <a href="/" className="linkregister1">
            ¿Ya tienes cuenta? Iniciar sesión
          </a>
        </div>
      </div>

      <Modal open={modalOpen} onClose={handleModalClose} className={classes.modal}>
        <div className={classes.paper}>
          <p className={classes.message}>{responseMessage}</p>
          <Button variant="contained" className={classes.buttom} color="primary" onClick={handleRedirect}>
            Cerrar
          </Button>
        </div>
      </Modal>
    </section>
  );
}
