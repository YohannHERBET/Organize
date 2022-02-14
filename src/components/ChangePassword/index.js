import './changePassword.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'src/actions/modals';
import { 
  changeInputCurrentPassword,
  changeInputNewPassword,
  changeInputConfirmPassword,
  editPassword,
} from 'src/actions/controlledField';
import { logout } from 'src/actions/action';
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const valueChangeCurrentPassword = useSelector((state) => state.controlled.inputChangeCurrentPassword);
  const valueChangeNewPassword = useSelector((state) => state.controlled.inputChangeNewPassword);
  const valueChangeConfirmPassword = useSelector((state) => state.controlled.inputChangeConfirmPassword);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <>
      <div className="password-page">
        <div className="change-password-container">
          <div
            className="change-password-close"
            onClick={() => (
              dispatch(hideModal())
            )}
          >
            <span className="material-icons md-48">close</span>
          </div>
          <h2 className="title">Modifier mon mot de passe</h2>
          <form 
            className="change-password-form"
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(hideModal());
              // editPassword = method for send the new password
              dispatch(editPassword());
              dispatch(logout());
              navigate("/login", { replace: true })
            }}
          >
            <input
              className="current-password"
              placeholder="Mot de passe actuel"
              type="password"
              value={valueChangeCurrentPassword}
              onChange={(event) => {
                dispatch(changeInputCurrentPassword(event.target.value))
              }}
            />
            <input
              className="new-password"
              placeholder="Nouveau mot de passe"
              type="password"
              value={valueChangeNewPassword}
              onChange={(event) => {
                dispatch(changeInputNewPassword(event.target.value))
              }}
            />
            {valueChangeCurrentPassword == valueChangeNewPassword ? <p> Le nouveau mot de passe doit être différent du dernier mot de passe </p> :null}

            <input
              className="new-password-verified"
              placeholder="Confirmer nouveau mot de passe"
              type="password"
              value={valueChangeConfirmPassword}
              onChange={(event) => {
                dispatch(changeInputConfirmPassword(event.target.value))
              }}
            />
            {valueChangeConfirmPassword !== valueChangeNewPassword ? <p> La confirmation ne correspond pas au nouveau mot de passe </p> : null}

            <div className="password-buttons">
              <button
                className="new-password-button-cancel"
                type="button"
                onClick={() => (
                  dispatch(hideModal())
                )}
              >
                Annuler
              </button>
              <button
                className="new-password-button"
                type="submit"
                disabled={valueChangeCurrentPassword === valueChangeNewPassword || valueChangeConfirmPassword !== valueChangeNewPassword ? 'disabled' : null}
              >
                Confirmer nouveau mot de passe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
