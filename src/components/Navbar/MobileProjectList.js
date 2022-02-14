import './navbar.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showNewProjectModal } from 'src/actions/modals';
import { displayMobileProjectList } from 'src/actions/action';
import { saveCurrentProjectId, fetchProject } from 'src/actions/projects';


const MobileProjectList = () => {
  const dispatch = useDispatch();
  const projectsDataFromState = useSelector((state) => state.reducer.projectsData);

  return (

    <div className="projects-container">
      <ul className="mobile-projects-list">
        {projectsDataFromState.map((project) => (
          <Link 
            key={project.id} 
            to={`/kanban-view/project/${project.title}`}
            onClick={() => (
              dispatch(saveCurrentProjectId(project.id)),
              dispatch(fetchProject()),
              dispatch(displayMobileProjectList())
            )}
          > 
            <li>{project.title} </li> 
          </Link>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => (
          dispatch(showNewProjectModal()),
          dispatch(displayMobileProjectList())
        )}
      >
        +
      </button>
    </div>
    

  );
};

export default MobileProjectList;
