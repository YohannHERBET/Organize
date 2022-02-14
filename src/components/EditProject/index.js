import './editProject.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'src/actions/modals';
import 
  { 
    changeInputChangeProjectName, 
    changeInputChangeProjectDescription, 
    editProject 
  } from 'src/actions/controlledField';
import { fetchData, fetchProject} from '../../actions/projects';

const EditProject = () => {
  const dispatch = useDispatch();

  const projectNameValue = useSelector((state) => state.reducer.inputChangeProjectName);
  const projectDescriptionValue = useSelector((state) => state.reducer.inputChangeProjectDescription);
  
  return (
    <div className="current-project-container">

      <div
        className="current-project-close"
        onClick={() => (
          dispatch(hideModal())
        )}
      >
        <span className="material-icons md-48">close</span>
      </div>

      <h4>Modfier mon projet</h4>
      <form
        className="current-project-form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(editProject());
          dispatch(hideModal());
          dispatch(fetchData());
          setTimeout(() => {dispatch(fetchProject())}, 300);
        }}
      >
        <input
          className="current-project-name"
          placeholder="Nom du projet"
          value={projectNameValue}
          onChange={(event) => {
            dispatch(changeInputChangeProjectName(event.target.value));
          }}
        />
        <textarea
          className="current-project-description"
          placeholder="Description"
          value={projectDescriptionValue}
          onChange={(event) => {
            dispatch(changeInputChangeProjectDescription(event.target.value));
          }}
        />
        <button 
          className="submit-edition-project" 
          type="submit"        
        >Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditProject;
