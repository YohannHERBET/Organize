import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { showEditTaskModal } from 'src/actions/modals';
import { saveCurrentTaskId, fetchTask, saveTask } from 'src/actions/projects';
import { findPriority } from 'src/selectors/selectors';
import { fetchCategory, fetchProject, saveCurrentCategoryId } from '../../actions/projects';

const KanbanTask = ({ taskId, task, priority, categoryId, dueDate }) => {
  const dispatch = useDispatch();
  const currentProjectId = useSelector((state) => state.reducer.currentProjectId);

  let today = Date.now();
  console.log(today)
  const dueDateMs = Date.parse(dueDate);
  console.log(dueDateMs)

  const timerMs = dueDateMs - today;
  console.log(timerMs)
  const timerDay = timerMs/1000/60/24/30/2;
  console.log(timerDay);


  const timerDayRounded = Math.ceil(timerDay)
  console.log(timerDayRounded);
  


 
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
