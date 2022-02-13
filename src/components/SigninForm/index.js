import './signin-form.scss';
import { useDispatch, useSelector } from 'react-redux';
import logo from 'src/assets/logo2.png';
import Header from 'src/components/Header';
import {
  changeInputSigninEmail,
  changeInputSigninPassword,
} from 'src/actions/controlledField';
import { createUser } from 'src/actions/action';
import { useNavigate } from "react-router-dom";

const SigninForm = () => {

  const valueSigninEmail = useSelector((state) => state.reducer.inputSigninEmail);
  const valueSigninPassword = useSelector((state) => state.reducer.inputSigninPassword);
  const errorCode = useSelector((state) => state.reducer.errorCode);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="signin-container">
        <div className="signin-form-page">
          <div className="signin-form-left">
            <img src={logo} alt="logo-organize" className="signin-logo" />
            <p> On est les meilleurs</p>
          </div>

          <div className="signin-form-right">
            <h2 className="signin-form-title">Créer un compte</h2>
            <form 
              className="signin-form"
              onSubmit={(event) => {
                event.preventDefault();
                navigate("/login", { replace: true });
                dispatch(createUser());
              }}
            >
              <input 
                className="signin-form-email" 
                required
                placeholder="Email" 
                type="email" 
                value={valueSigninEmail}
                onChange={(event) => {
                  dispatch(changeInputSigninEmail(event.target.value))
                }}  
              />
               {/* {errorCode === 422 ? <p>Adresse email non valide</p> : null } */}
              <input  
                className="signin-form-password"
                required
                placeholder="Mot de passe"
                type="password"
                value={valueSigninPassword}
                onChange={(event) => {
                  dispatch(changeInputSigninPassword(event.target.value))
                }}
              />
              <button className="signin-form-button" type="submit">
                Inscription
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
};

export default SigninForm;
