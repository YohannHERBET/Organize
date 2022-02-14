import { useDispatch } from 'react-redux';
import { showNewTaskModal, 
  showDeleteCategoryModal, 
  showEditCategoryModal 
} from 'src/actions/modals';
import { saveCurrentCategoryId, fetchCategory } from 'src/actions/projects';
import KanbanTasks from './kanbanTasks';

const KanbanBoard = 
({ 
  categoryName, 
  categoryId, 
  categoryTasks }) => {

  const dispatch = useDispatch();

  return (
    
  <div className="kanban-category" key={categoryId}>
    <div className="board-header">
      <h3>{categoryName}</h3>
      <div>
        <button
        type="submit"
        className="button-edit-category"
        onClick={() => (
          dispatch(showEditCategoryModal()),
          dispatch(saveCurrentCategoryId(categoryId)),
          dispatch(fetchCategory())
        )}
        >
          <span className="material-icons">
          more_vert
          </span>
        </button>
        <button
          type="submit"
          className="button-delete-category"
          onClick={() => (
            dispatch(showDeleteCategoryModal()),
            dispatch(saveCurrentCategoryId(categoryId))
          )}
        >
          <span className="material-icons">
            delete
          </span>
        </button>
      </div>
    </div>
    <KanbanTasks 
      categoryId={categoryId}
      categoryTasks={categoryTasks}
    />

    <button
      type="submit"
      onClick={() => (
        dispatch(showNewTaskModal()),
        dispatch(saveCurrentCategoryId(categoryId)),
        dispatch(fetchCategory(categoryId))
      )}
    >
      Ajouter une tâche
    </button>
  </div>

  );
};

export default KanbanBoard;

// FAIRE PROPTYPES
