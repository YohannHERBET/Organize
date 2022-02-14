import './newProject.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'src/actions/modals';
import { sendProject, changeInputNewProjectName, changeInputNewProjectDescription } from 'src/actions/controlledField';

const NewProject = () => {
  const valueNewProjectName = useSelector((state) => state.controlled.inputProjectName);
  const descriptionNewProjectValue = useSelector((state) => state.controlled.inputProjectDescription);
  const dispatch = useDispatch();

  return (
    <div className="new-project-page">
      <div className="new-project-container">

        <div
          className="new-project-close"
          onClick={() => (
            dispatch(hideModal())
          )}
        >
          <span className="material-icons md-48">close</span>
        </div>

        <h4>Nouveau projet</h4>

        <form
          className="new-project-form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(sendProject());
            dispatch(hideModal());
          }}
        >
          <input 
            className="new-project-name"
            placeholder="Nom du projet"
            type="text"
            value={valueNewProjectName}
            onChange={(event) => {
              dispatch(changeInputNewProjectName(event.target.value));
            }}
          />
          <textarea 
            className="new-project-description"
            placeholder="Description"
            type="text"
            value={descriptionNewProjectValue}
            onChange={(event) => {
              dispatch(changeInputNewProjectDescription(event.target.value));
            }}
          />

          <button className="submit-new-project" type="submit">Confirmer nouveau projet</button>
        </form>
      </div>
    </div>
  );
};

export default NewProject;
