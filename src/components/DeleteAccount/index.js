import './deleteAccount.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hideModal } from 'src/actions/modals';
import { deleteUser, logout } from 'src/actions/action';


const DeleteAccount = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <>
      <div className="container-delete-account">
        <div className="delete-acount">
          <h2>Etes-vous sûr de vouloir supprimer votre compte ?</h2>
          <p>(et retrouver une vie compliquée)</p>
          <div className="delete-account-buttons">
            <button
              className="cancel"
              type="button"
              onClick={() => (
                dispatch(hideModal())
              )}
            >
              Annuler
            </button>
            <button
              className="confirm"
              type="submit"
              onClick={(event) => (
                event.preventDefault(),
                dispatch(deleteUser()),
                dispatch(hideModal()),
                dispatch(logout()),
                navigate("/", { replace: true })
              )}

            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteAccount;
