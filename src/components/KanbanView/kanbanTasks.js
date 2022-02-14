import KanbanTask from './kanbanTask';

const KanbanTasks = ({ categoryTasks, categoryId }) => {

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
