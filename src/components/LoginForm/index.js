import './login-form.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'src/components/Header';
import { changeInputLoginEmail, changeInputLoginPassword } from 'src/actions/controlledField';
import { logIn, saveUserData } from 'src/actions/action';
// import { Navigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import ErrorLogin from 'src/components/ErrorLogin';

const LoginForm = () => {
  const valueLoginEmail = useSelector((state) => state.reducer.changeInputLoginEmail);
  const valueLoginPassword = useSelector((state) => state.reducer.changeInputLoginPassword);
  const isLogged = useSelector((state) => state.reducer.isLogged);
  const errorCode = useSelector((state) => state.reducer.errorCode);
  const loading = useSelector((state) => state.reducer.loading);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    {isLogged && navigate("/dashboard", { replace: true })}
  }, [])

  return (
    <>
      <Header />
      <div className="login-form-page">
        <h2 className="login-connect">Se connecter</h2>
        {!isLogged && (
        <form 
          className="login-form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(logIn());
            dispatch(saveUserData());
          }}
        >
          <input 
            className="login-form-email"
            required
            placeholder="Email"
            type="email"
            value={valueLoginEmail}
            onChange={(event) => {
              dispatch(changeInputLoginEmail(event.target.value));
            }}
          />
          <input
            className="login-form-password"
            required
            placeholder="Mot de passe"
            type="password"
            value={valueLoginPassword}
            onChange={(event) => {
              dispatch(changeInputLoginPassword(event.target.value));
            }}
          />
          <button className="login-form-button" type="submit">
            Connexion
          </button>
          <Link className="noAccount" to="/signin" > Pas de compte ? C'est par ici !</Link>
        </form>
        )}
        {errorCode === 401 ? <p> Email et/ou mot de passe incorrect(s)</p> : null }
        
      </div>
    </>
  );
};

export default LoginForm;
