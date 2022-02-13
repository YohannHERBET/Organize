// == Import
import './styles.scss';
import { Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewProjectModal from 'src/components/NewProject';
import Home from '../Home';
import Dashboard from '../Dashboard';
import SigninForm from '../SigninForm';
import LoginForm from '../LoginForm';
import Settings from '../Settings';
import KanbanView from '../KanbanView';
import Views from '../Views';
import Error from '../Error';
import { fetchData } from '../../actions/projects';
import { sendProject, sendCategory } from '../../actions/controlledField';
import { hideModal } from '../../actions/modals';
import Loading from './Loading';



// == Composant
const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.reducer.isLogged);
  const displayNewProjectModal = useSelector((state) => state.modals.displayNewProjectModal);
  const displayNewTaskModal = useSelector((state) => state.modals.displayNewTaskModal);
  const displayEditTaskModal = useSelector((state) => state.modals.displayEditTaskModal);
  const loading = useSelector((state) => state.reducer.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [sendProject()]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div 
      className="app"
    >
      {displayNewProjectModal && (<NewProjectModal />)}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<Error />} />
        {isLogged && (
          <>
            <Route path="/views" element={<Views />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/kanban-view/project/:projectTitle" element={<KanbanView />} />
            <Route path="/settings" element={<Settings />} />
          </>
        )}
      </Routes>
    </div>
  );
};

// == Export
export default App;
