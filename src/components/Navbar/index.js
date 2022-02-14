import './navbar2.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showNewProjectModal } from 'src/actions/modals';
import { displayMobileProjectList } from 'src/actions/action';

import MobileProjectList from './MobileProjectList';
import ProjectList from './ProjectList';

const Navbar = () => {
  const dispatch = useDispatch();
  const mobileProjectList = useSelector((state) => state.reducer.mobileProjectList);

  return (
    <>
      <nav className="navbar-container">
        <ul className="navbar-ul">
          <li className="nav-item">
            <NavLink className="dashboard-icon" to="/dashboard">
              <span className="material-icons md-48">space_dashboard</span>
              <p className="navlink-text">Dashboard</p>
            </NavLink>
          </li>

          <li
            className="nav-item nav-item-projects"
            onClick={() => (
              dispatch(displayMobileProjectList())
            )}
          >
            <div className="project-icon">
              <span className="material-icons md-48">rocket_launch</span>
              <p className="navlink-text">Projets
                <span
                  className="navlink-text-span"
                  onClick={() => (
                    dispatch(showNewProjectModal())
                  )}
                >+
                </span>
              </p>
            </div>
            <ProjectList />
          </li>
          <li className="navbar-settings-li nav-item">
            <NavLink className="settings-icon" to="/settings">
              <span className="material-icons md-48">settings</span>
              <p className="navlink-text">Paramètres</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      {mobileProjectList && <MobileProjectList />}
    </>
  );
};

export default Navbar;
