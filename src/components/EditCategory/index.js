import './editCategory.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'src/actions/modals';
import { editCategory, changeInputEditCategoryName } from 'src/actions/controlledField';
import { fetchData } from '../../actions/projects';

const EditCategory = () => {
  const editCategoryName = useSelector((state) => state.reducer.valueEditCategoryName);

  const dispatch = useDispatch();

  return (
    <>
      <div className="container-edit-category">
        <div className="edit-category">
        <div
            className="edit-category-close"
            onClick={() => (
              dispatch(hideModal())
            )}
          >
            <span className="material-icons md-48">close</span>
          </div>
          <h2>Modifier le nom de la catégorie</h2>
          <form
            className="edit-category-buttons"
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(editCategory());
              dispatch(fetchData());
              dispatch(hideModal());              
            }}
          >
            <input
              className="edit-category-name"
              placeholder="Nom de la catégorie"
              type="text"
              value={editCategoryName}
              onChange={(event) => {
                dispatch(changeInputEditCategoryName(event.target.value));
              }}
            />
            <button
              className="cancel"
              type="button"
              onClick={() => (
                dispatch(hideModal())
              )}
            >
              Annuler
            </button>
            <button className="confirm" type="submit">Confirmer</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditCategory;
