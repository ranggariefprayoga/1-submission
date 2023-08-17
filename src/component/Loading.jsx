import { LoadingBar } from "react-redux-loading-bar";
import "../styles/loading.css";

function Loading() {
  return (
    <div className="loading">
      <LoadingBar />
      <h2 className="h2">Ini Rangga</h2>
    </div>
  );
}

export default Loading;
