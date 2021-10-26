import React from "react";
import ReactDOM from "react-dom";

const LoginModal = ({ visible, toggle }) => visible ? ReactDOM.createPortal(
    <div className="modal">
        <div className="modal-dialog md max-width">
            <div className="modal-header">
                <div>
                    <h3>Inicio de Sesión</h3>
                    <span className="tex-sm">Ingresa tu usuario y contraseña para continuar</span>
                </div>
                <button className="close btn btn-link-secondary" onClick={toggle}>
                    <span>&times;</span>
                </button>
            </div>
            <div className="mt-3">
                <div className="form-item full">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Correo Electrónico"
                        className="input"
                    />
                </div>

                <div className="form-item full">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="text"
                        placeholder="Contraseña"
                        className="input"
                    />
                </div>
            </div>
        </div>
    </div>
    , document.querySelector('body')) : null;

export default LoginModal;
