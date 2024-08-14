import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";

import { Provider } from "react-redux";
import store from "./stores/store";
import ToastProvider from "./components/Toast";

const Root = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ToastProvider />
        <App />
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
