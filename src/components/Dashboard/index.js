import './dashboard.scss';
import { Link }  from 'react-router-dom';
import Header from 'src/components/Header';
import Navbar from 'src/components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


import { showNewProjectModal, showEditTaskModal } from 'src/actions/modals';
import { fetchData, fetchTask, fetchTasks, fetchFiltredTask, saveCurrentProjectId, fetchProject, saveProject, saveCurrentTaskId, saveCurrentCategoryId, fetchCategory } from '../../actions/projects';

import { sendProject } from '../../actions/controlledField';

// un selector c'est simplement une fonction à qui on passe le state pour en déduire une valeur

// import projectsData from 'src/data';

const Dashboard = () => {
  const dispatch = useDispatch();
  const projectsDataFromState = useSelector((state) => state.reducer.projectsData);
  const token = useSelector((state) => state.reducer.token);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchFiltredTask());
  }, [!token == '']);

  const filterCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd + 'T00:00:00+01:00';

    return today;
  };

  const taskDataFromState = useSelector((state) => state.reducer.tasksData);
  console.log(taskDataFromState);

  console.log((projectsDataFromState.map((project) => project.categories.map((category) => category.tasks.filter(task => 
    (task.dueDate > filterCurrentDate())).map((task) => (
      <Link
        key={task.id}
        to={`/kanban-view/project/${project.id}`}
      >
        <li>{task.name} ({task.dueDate.split('T')[0]})</li>
      </Link>
    ))))).splice(0, 5));
  return (
    <>
      <Header />
      <Navbar />
      <div className="dashboard-page">
        <div className="dashboard-view">

          <div className="left-view">
            <h3> Projets en cours </h3>

            <button
              onClick={() => (
                dispatch(showNewProjectModal())
              )}
              type="submit"
            >
              Nouveau projet
            </button>

            <ul>
              {projectsDataFromState.map((project) => (
                <Link
                  key={project.id}
                  to={`/kanban-view/project/${project.title}`}
                  onClick={() => (
                    dispatch(saveCurrentProjectId(project.id)),
                    dispatch(fetchProject())
                  )}
                >
                  <li>{project.title} </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="right-view">
            <div className="current-tasks">
              <h3>Tâches du jour</h3>
              <ul>

                {projectsDataFromState.map((project) => project.categories.map((category) =>
                category.tasks.filter(task => (task.dueDate == filterCurrentDate())).map((task) => (
                  <Link key={task.id} to={`/kanban-view/project/${project.title}`}onClick={() => 
                    (
                      dispatch(fetchProject(project.id)),
                      dispatch(saveCurrentTaskId(task.id)),
                      dispatch(saveCurrentCategoryId(category.id)),
                      dispatch(saveCurrentProjectId(project.id)),
                      dispatch(fetchTask()),
                      dispatch(fetchCategory(category.id)),
                      dispatch(showEditTaskModal())
                    )}>
                    <li>{task.name}</li>
                  </Link>))))}
              </ul>

            </div>
            <div className="future-tasks">
              <h3>Tâches à venir</h3>
              <ul>
                {(taskDataFromState.map((task) => (
                  <Link
                    key={task.id}
                    to={`/kanban-view/project/${task.category.project.title}`}
                    onClick={() => (
                      dispatch(saveCurrentTaskId(task.id)),
                      dispatch(saveCurrentCategoryId(task.category.id)),
                      dispatch(saveCurrentProjectId(task.category.project.id)),
                      dispatch(fetchTask()),
                      dispatch(fetchCategory(task.category.id)),
                      dispatch(fetchProject(task.category.project.id)),
                      dispatch(showEditTaskModal())
                    )}
                  >
                    <li>{task.name}</li>
                  </Link>
                )))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
