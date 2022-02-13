import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from 'src/actions/projects';
import { sendTask } from '../../actions/controlledField';

import KanbanTask from './kanbanTask';

const KanbanTasks = ({ categoryTasks, categoryId }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [sendTask()]);

  return (
    <div className="kanban-tasks" key={categoryId}>
      {categoryTasks.map((task) => (
        <KanbanTask
          taskId={task.id}
          task={task.name}
          priority={task.priority}
          categoryId = {categoryId}
          dueDate={task.dueDate}
        />
      ))}
    </div>
  );
};

export default KanbanTasks;

// TODO Props validations
