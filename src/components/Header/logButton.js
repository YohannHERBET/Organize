import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'src/actions/action';


const logButton = () => {
  const isLogged = useSelector((state) => state.reducer.isLogged);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  return(
    <div className="log-buttons">
      {!isLogged &&
      (      
      <>
        <NavLink type="submit" className="login-button" to="/login"> Se connecter </NavLink>
        <NavLink type="submit" className="signin-button" to="/signin"> S'inscrire </NavLink>
      </>
      )}
      {isLogged &&
       (
        <NavLink
          type="submit"
          className="loggout-button"
          to="/"
          onClick={(event) => {
            event.preventDefault();
            dispatch(logout());
            navigate("/", { replace: true });
          }}
        >
          Se déconnecter
        </NavLink>
       )
      }
    </div>
  );
};

export default logButton;
