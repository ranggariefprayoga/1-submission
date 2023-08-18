import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navigation({ authUser, signOut }) {
  const { id, name, avatar } = authUser;

  return (
    <div className="navigation">
      <div className="navigation-user">
        <img src={avatar} alt={id} title={name} />
        <h2>{name}</h2>
      </div>
      <div className="navigation-link">
        <nav>
          <Link to="/" className="link-home">
            Home
          </Link>
          <Link to="/leaderboards" className="link-leaderboards">
            Leaderboards
          </Link>
        </nav>
        <button type="button" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
