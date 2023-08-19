/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import "./styles/style.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./component/Loading";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LeaderboardsPage from "./pages/LeaderboardsPage";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { asyncUnsetAuthUser } from "./states/authUser/action";

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} signOut={onSignOut} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
