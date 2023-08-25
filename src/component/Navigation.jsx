/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { NavigationContainer, UserInfo, Image, Name, LinkContainer, IconToggle, style, SignOutButton } from "./styled/Navigation";

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
    <NavigationContainer>
      {" "}
      <UserInfo>
        <Image src={avatar} alt={id} title={name} />
        <Name>{name}</Name>
      </UserInfo>
      <LinkContainer ref={wrapperRef}>
        <IconToggle onClick={toggleMenu}>
          <FiMenu style={style} />
        </IconToggle>
        <nav className="menu-items">
          <div onClick={handleHome} className="link-home">
            Home
          </div>
          <div onClick={handleLeaderboards} className="link-leaderboards">
            Leaderboards
          </div>
        </nav>
        <SignOutButton type="button" onClick={signOut}>
          Sign Out
        </SignOutButton>
      </LinkContainer>
    </NavigationContainer>
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
