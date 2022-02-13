import './deleteTask.scss';
import { useDispatch } from 'react-redux';
import { hideModal } from 'src/actions/modals';
import { deleteTask, fetchData } from '../../actions/projects';

const DeleteTask = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-delete-task">
        <div className="delete-task">
          <h2>Etes-vous sûr de vouloir supprimer votre tâche ?</h2>
          <div className="delete-task-buttons">
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
                dispatch(deleteTask()),
                dispatch(fetchData()),
                dispatch(hideModal())
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
export default DeleteTask;
