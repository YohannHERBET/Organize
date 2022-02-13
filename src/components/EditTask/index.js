import './editTask.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { hideModal, showDeleteTaskModal } from 'src/actions/modals';

import {
  changeInputChangeTaskName,
  changeInputChangeTaskDescription,
  editTaskPost,
  changeSelectNewPriority,
  changeSelectNewCategory,
  changeEditTaskEndDate,
  changeEditTaskStartDate,
} from 'src/actions/controlledField';

import { importanceList, findPriority } from 'src/selectors/selectors';
import { fetchData, deleteTask } from '../../actions/projects';


const EditTask = () => {
  const projectsDataFromState = useSelector((state) => state.reducer.projectsData);
  const currentProjectId = useSelector((state) => state.reducer.currentProjectId); 
  const foundProject = projectsDataFromState.find((project) => project.id == currentProjectId);
 
  const currentCategory = useSelector((state) => state.reducer.category);

  const inputEditTaskName = useSelector((state) => state.reducer.inputEditTaskName);
  const inputEditTaskDescription = useSelector((state) => state.reducer.inputEditTaskDescription);
  const EditTaskStartDate = useSelector((state) => state.reducer.EditTaskStartDate);
  const EditTaskEndDate = useSelector((state) => state.reducer.EditTaskEndDate);
  const dispatch = useDispatch();

  const NewTaskStartDate = useSelector((state) => state.reducer.EditTaskStartDate);
  const NewTaskEndDate = useSelector((state) => state.reducer.EditTaskEndDate);

  const task = useSelector((state) => state.reducer.task);

  return (
    <div className="container-form">
      <div className="edittask-form">

        <div
          className="edit-task-close"
          onClick={() => (
            dispatch(hideModal())
          )}
        >
          <span className="material-icons md-48">close</span>
        </div>

        <div className="header-form">
          <h4>Modifier tâche</h4>
          <button
            type="submit"
            className="button-delete-task"
            onClick={() => (
              dispatch(showDeleteTaskModal())
            )}
          >
            <span className="material-icons">
              delete
            </span>
          </button>
        </div>

        <form
          className="input-form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(editTaskPost());
            dispatch(deleteTask());
            dispatch(fetchData());
            dispatch(hideModal());
          }}
        >
          <textarea
            placeholder="Titre"
            value={inputEditTaskName}
            onChange={(event) => {
              dispatch(changeInputChangeTaskName(event.target.value));
            }}
          />
          <textarea
            placeholder="Description"
            value={inputEditTaskDescription}
            onChange={(event) => {
              dispatch(changeInputChangeTaskDescription(event.target.value));
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
            <option value={task.priority}>{`${findPriority(task.priority)} (actuel)`}</option>
            {importanceList.map((importance) => (
              <option
                key={importance.id}
                value={importance.id}
              >{importance.inportanceName}
              </option>
            ))}
          </select>

          <div className="assignated-category">
            <p>Catégorie :</p>
            <select
              className="category-select"
              name="category-select"
              id="category-select"
              onChange={(event) => {
                dispatch(changeSelectNewCategory(event.target.value));
            }}
            >
              <option>{currentCategory.name_category}</option>
              {foundProject.categories.map((category) => (
              <option 
                className="category-select"
                key={category.id}
                value={category.id}
              >
                {category.name_category}
              </option>
              ))}
            </select>

          </div>
          <div className="date-form">
            <p>Date de début :</p>
            <input
              className="first-input-form"
              name="start"
              placeholder="28/09/94"
              type="date"
              value={NewTaskStartDate == null ? EditTaskStartDate : EditTaskStartDate.split('T')[0]}
              onChange={(event) => {
                dispatch(changeEditTaskStartDate(event.target.value));
              }}
            />
            <p>Pour le :</p>
            <input
              name="end"
              id="end"
              placeholder="01/01/50"
              type="date"
              value={NewTaskEndDate == null ? EditTaskEndDate : EditTaskEndDate.split('T')[0]}
              onChange={(event) => {
                dispatch(changeEditTaskEndDate(event.target.value));
              }}
            />
            <button className="button-form" type="submit">Mettre à jour</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditTask;
