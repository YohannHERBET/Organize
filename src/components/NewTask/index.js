import './newTask.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'src/actions/modals';
import {
  sendTask,
  changeInputNewTaskName,
  changeInputNewTaskDescription,
  changeSelectNewPriority,
  changeNewTaskStartDate,
  changeNewTaskEndDate,
} from 'src/actions/controlledField';
import { importanceList } from 'src/selectors/selectors';
import { fetchData } from '../../actions/projects';

const NewTask = () => {
  const titleNewTaskValue = useSelector((state) => state.controlled.inputTaskName);
  const descriptionNewTaskValue = useSelector((state) => state.controlled.inputTaskDescription);
  const currentCategory = useSelector((state) => state.reducer.category);
  const NewTaskStartDate = useSelector((state) => state.reducer.NewTaskStartDate);
  const NewTaskEndDate = useSelector((state) => state.reducer.NewTaskEndDate);
  const dispatch = useDispatch();

  return (
    <div className="container-form">
      <div className="newtask-form">
        <div
          className="new-task-close"
          onClick={() => (
            dispatch(hideModal())
          )}
        >
          <span className="material-icons md-48">close</span>
        </div>

        <div className="header-form">
          <h4>Nouvelle tâche</h4>
        </div>
        <form
          className="input-form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(sendTask());
            dispatch(fetchData());
            dispatch(hideModal());
          }}
        >
          <input
            className="newtask-title"
            placeholder="Titre"
            value={titleNewTaskValue}
            onChange={(event) => {
              dispatch(changeInputNewTaskName(event.target.value));
            }}
          />
          <textarea
            className="newtask-description"
            placeholder="Description"
            value={descriptionNewTaskValue}
            onChange={(event) => {
              dispatch(changeInputNewTaskDescription(event.target.value));
            }}
          />
          <select
            className="important-select"
            name="important"
            id="important-select-id"
            onChange={(event) => {
              dispatch(changeSelectNewPriority(event.target.value));
            }}
          >
            <option
            value="">importance</option>
            {/* importanceList is a table in selector the file for compare the datas of API with this table */}
            {importanceList.map((importance) => (
              <option
                key={importance.id}
                value={importance.id}
              >
                {importance.inportanceName}
              </option>
            ))}
          </select>
          <div className="assignated-category">
            <p>Catégorie :</p>
            <input 
            className="category-input" 
            value={currentCategory.name_category}
             />
          </div>
          <div className="date-form">
            <label htmlFor="start">
              Date de début :
              <input
                name="start"
                placeholder="28/09/94"
                type="date"
                value={NewTaskStartDate}
                onChange={(event) => {
                  dispatch(changeNewTaskStartDate(event.target.value));
                }}
              />
            </label>
            <label htmlFor="end">
              Pour le :
              <input
                name="end"
                placeholder="01/01/50"
                type="date"
                value={NewTaskEndDate}
                onChange={(event) => {
                  dispatch(changeNewTaskEndDate(event.target.value));
                }}
              />
            </label>
            <div className="button-container">
              <button
                className="button-form"
                type="submit"
              >
                Création de la tâche
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
