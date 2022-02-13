import './settings.scss';
import Header from 'src/components/Header';
import Navbar from 'src/components/Navbar';
import ChangePasswordModal from 'src/components/ChangePassword';
import { useSelector, useDispatch } from 'react-redux';
import { showDeleteAccountModal, showChangePasswordModal } from 'src/actions/modals';
import { changeSettingsEmail, editEmail } from 'src/actions/controlledField';
import { logout } from 'src/actions/action';
import DeleteAccount from 'src/components/DeleteAccount';
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const displayDeleteAccountModal = useSelector((state) => state.modals.displayDeleteAccountModal);
  const displayChangePasswordModal = useSelector((state) => state.modals.displayChangePasswordModal);
  const valueSettingsEmail = useSelector((state) => state.controlled.inputSettingsEmail);

  return (
    <>
      <Header />
      <Navbar />
      {displayChangePasswordModal && (<ChangePasswordModal />)}
      {displayDeleteAccountModal && (<DeleteAccount />)}
      <div className="setting-container">
        <div className="settings-form">
          <h2>Paramètres du compte</h2>

          <div className="mail-settings">
            <p>Email</p>
            <form 
              onSubmit={(event) => {
                event.preventDefault();
                dispatch(editEmail());
                dispatch(logout());
                navigate("/login", { replace: true })
              }}
            >
              <input 
                type="email" 
                placeholder="*****@gmail.com"
                value={valueSettingsEmail}
                onChange={(event) => {
                  dispatch(changeSettingsEmail(event.target.value))
                }}  
              />
              <button type="submit">Modifier</button>
            </form>
          </div>

          <div
            className="mdp-settings"
            onClick={() => (
              dispatch(showChangePasswordModal())
            )}
          >
            Changer le mot de passe
          </div>

          <div
            onClick={() => (
              dispatch(showDeleteAccountModal())
            )}
            className="delete-account-settings"
          >
            Supprimer le compte
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
