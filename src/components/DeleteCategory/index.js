import './deleteCategory.scss';
import { useDispatch } from 'react-redux';
import { hideModal } from 'src/actions/modals';
import { deleteCategory, fetchData } from '../../actions/projects';

const DeleteCategory = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-delete-category">
        <div className="delete-category">
          <h2>Etes-vous sûr de vouloir supprimer cette catégorie ?</h2>
          <div className="delete-category-buttons">
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
                dispatch(deleteCategory()),
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
export default DeleteCategory;

