import './navbar.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { saveCurrentProjectId, fetchProject } from 'src/actions/projects';

const ProjectList = () => {

  const dispatch = useDispatch();

  const projectsDataFromState = useSelector((state) => state.reducer.projectsData);

  return (
    <ul className="projects-list">
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
  );
};

export default ProjectList;
