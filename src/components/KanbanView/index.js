import './kanbanView.scss';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'src/components/Header';
import Navbar from 'src/components/Navbar';
import {
  showEditProjectModal,
  showDeleteProjectModal,
  showNewCategoryModal,
} from 'src/actions/modals';

import KanbanBoard from './kanbanBoard';

import EditProjectModal from 'src/components/EditProject';
import DeleteProject from 'src/components/DeleteProject';

import NewCategory from 'src/components/NewCategory';
import DeleteCategory from 'src/components/DeleteCategory';

import NewTaskModal from 'src/components/NewTask';
import EditTaskModal from 'src/components/EditTask';
import DeleteTask from 'src/components/DeleteTask';
import EditCategory from 'src/components/EditCategory';

import { fetchProject } from 'src/actions/projects';


const KanbanView = () => {
  const dispatch = useDispatch();

  const currentProject = useSelector((state) => state.reducer.project);
  const projectsDataFromState = useSelector((state) => state.reducer.projectsData);
  const currentProjectId = useSelector((state) => state.reducer.currentProjectId); 
  const foundProject = projectsDataFromState.find((project) => project.id == currentProjectId);

  const displayDeleteProjectModal = useSelector((state) => state.modals.displayDeleteProjectModal);
  const displayEditProjectModal = useSelector((state) => state.modals.displayEditProjectModal);

  const displayNewCategoryModal = useSelector((state) => state.modals.displayNewCategoryModal);
  const displayDeleteCategoryModal = useSelector((state) => state.modals.displayDeleteCategoryModal);

  const displayNewTaskModal = useSelector((state) => state.modals.displayNewTaskModal);
  const displayEditTaskModal = useSelector((state) => state.modals.displayEditTaskModal);
  const displayDeleteTaskModal = useSelector((state) => state.modals.displayDeleteTaskModal);
  const displayEditCategoryModal = useSelector((state) => state.modals.displayEditCategoryModal);

  return (
    <div>
      <Header />
      <Navbar />
      {displayEditProjectModal && (<EditProjectModal />)}
      {displayDeleteProjectModal && (<DeleteProject />)}
      {displayNewCategoryModal && (<NewCategory />)}
      {displayDeleteCategoryModal && (<DeleteCategory />)}
      {displayNewTaskModal && (<NewTaskModal />)}
      {displayEditTaskModal && (<EditTaskModal />)}
      {displayDeleteTaskModal && (<DeleteTask />)}
      {displayEditCategoryModal && (<EditCategory />)}
      <div 
        className="kanban-view" 
        id="kanban-view"
      >
        <div className="kanban-title-option">
          <div className="title-delete-project">
            <h2>{currentProject.title}</h2>
            <button
              type="submit"
              className="button-delete-project"
              onClick={() => (
                dispatch(showDeleteProjectModal())
              )}
            >
              <span className="material-icons">
                delete
              </span>
            </button>
          </div>
          <div className="button-project-category">
            <button
              type="submit"
              className="button-change-project"
              onClick={() => (
                dispatch(showEditProjectModal()),
                dispatch(fetchProject())
              )}
            >
              Modifier projet
            </button>
            <button
              type="submit"
              className="button-add-category"
              onClick={() => (
                dispatch(showNewCategoryModal())
              )}
            >
              Ajouter une catégorie
            </button>
          </div>
        </div>

        <div className="kanban-board">

          {foundProject.categories.map((category) => (
            <KanbanBoard
              categoryName={category.name_category}
              categoryId={category.id}
              categoryTasks={category.tasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanView;
