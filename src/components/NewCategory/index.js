import './newCategory.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'src/actions/modals';
import { sendCategory, changeInputNewCategoryName } from 'src/actions/controlledField';
import { fetchData } from '../../actions/projects';

const NewCategory = () => {
  const valueNewCategoryName = useSelector((state) => state.controlled.inputNewCategoryName);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-new-category">
        <div className="new-category">
          <div
            className="new-category-close"
            onClick={() => (
              dispatch(hideModal())
            )}
          >
            <span className="material-icons md-48">close</span>
          </div>
          <h2>Nouvelle catégorie</h2>
          <form
            className="new-category-buttons"
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(sendCategory());
              dispatch(fetchData());
              dispatch(hideModal());
            }}
          >
            <input
              className="new-category-name"
              placeholder="Nom de la catégorie"
              type="text"
              value={valueNewCategoryName}
              onChange={(event) => {
                dispatch(changeInputNewCategoryName(event.target.value));
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
export default NewCategory;
