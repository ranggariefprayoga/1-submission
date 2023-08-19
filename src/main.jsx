/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./states/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
