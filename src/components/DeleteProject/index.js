import './deleteProject.scss';
import { useDispatch } from 'react-redux';
import { hideModal } from 'src/actions/modals';
import { deleteProject, fetchData } from '../../actions/projects';
import { useNavigate } from "react-router-dom";

const DeleteProject = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-delete-project">
        <div className="delete-project">
          <h2>Etes-vous sûr de vouloir supprimer votre projet ?</h2>
          <div className="delete-project-buttons">
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
              onClick={() => (
                dispatch(deleteProject()),
                dispatch(fetchData()),
                dispatch(hideModal()),
                navigate("/dashboard", { replace: true })
              )}
              type="submit"
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteProject;
