/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import store from "./states";
import Loading from "./component/Loading";

function App() {
  return (
    <>
      <h1>Haiiii</h1>
      <Loading />
    </>
  );
}

const isiStore = store.getState();
console.log(isiStore);

export default App;
