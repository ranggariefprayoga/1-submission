/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.classList.remove("open");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function Navigation({ authUser, signOut }) {
  const { id, name, avatar } = authUser;
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      wrapperRef.current.classList.remove("open");
    });
  }, []);

  const toggleMenu = () => {
    wrapperRef.current.classList.toggle("open");
  };

  const handleHome = () => {
    navigate("/");
    wrapperRef.current.classList.remove("open");
  };

  const handleLeaderboards = () => {
    navigate("/leaderboards");
    wrapperRef.current.classList.remove("open");
  };

  return (
    <div className="navigation">
      <div className="navigation-user">
        <img src={avatar} alt={id} title={name} />
        <h2>{name}</h2>
      </div>
      <div className={`navigation-link`} ref={wrapperRef}>
        <div className="menu-toggle" onClick={toggleMenu}>
          {<FiMenu className="icon" />}
        </div>
        <nav className="menu-items">
          <div onClick={handleHome} className="link-home">
            Home
          </div>
          <div onClick={handleLeaderboards} className="link-leaderboards">
            Leaderboards
          </div>
        </nav>
        <button className="menu-button" type="button" onClick={signOut}>
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
