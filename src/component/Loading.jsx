import { LoadingBar } from "react-redux-loading-bar";
import "../styles/loading.css";

function Loading() {
  return (
    <div className="loading">
      <LoadingBar />
    </div>
  );
}

export default Loading;
