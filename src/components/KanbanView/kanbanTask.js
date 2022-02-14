import { useDispatch, useSelector } from 'react-redux';
import { showEditTaskModal } from 'src/actions/modals';
import { saveCurrentTaskId, fetchTask } from 'src/actions/projects';
import { findPriority } from 'src/selectors/selectors';
import { fetchCategory, fetchProject, saveCurrentCategoryId } from '../../actions/projects';

const KanbanTask = ({ taskId, task, priority, categoryId, dueDate }) => {
  const dispatch = useDispatch();
  const currentProjectId = useSelector((state) => state.reducer.currentProjectId);

  let today = Date.now();
  const dueDateMs = Date.parse(dueDate);

  const timerMs = dueDateMs - today;
  const timerDay = timerMs/1000/60/24/30/2;
  const timerDayRounded = Math.ceil(timerDay)
  // for the difference of the date in a task with the duedate and date of the day
  


 
  return (
    <>
      <div className="kanban-task" key={taskId}>
        <h4 className="task-title">{task}</h4>
        <p className="task-priority">{findPriority(priority)}</p>
        
        
        <div className="timer">
          {dueDate !== null ? <span className="material-icons" id="timelapse"> timelapse</span>  : null }
          {dueDate !== null && timerDayRounded > 0 ? <p className="dueDate">J-{timerDayRounded}</p> : null }
          {dueDate !== null && timerDayRounded == 0 ? <p className="dueDate">Dernier jour</p> : null }
          {dueDate !== null && timerDayRounded < 0 ?  <p className="dueDate">Dépassé</p> : null }
        </div> 
       

        <button
          type="submit"
          onClick={() => (
            dispatch(saveCurrentTaskId(taskId)),
            dispatch(saveCurrentCategoryId(categoryId)),
            dispatch(fetchTask()),
            dispatch(fetchCategory(categoryId)),
            dispatch(fetchProject(currentProjectId)),
            dispatch(showEditTaskModal())
          )}
        >
          Voir plus
        </button>
      </div>
    </>
  );
};

export default KanbanTask;
