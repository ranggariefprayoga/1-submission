import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navigation({ authUser, signOut }) {
  const { id, name, avatar } = authUser;

  return (
    <div>
      <img src={avatar} alt={id} title={name} />
      <h2>Hai {name}</h2>
      <nav>
        <Link to="/threads">Home</Link>
        <Link to="/leaderboards">Leaderboards</Link>
      </nav>
      <button type="button" onClick={signOut}>
        Sign Out
      </button>
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
