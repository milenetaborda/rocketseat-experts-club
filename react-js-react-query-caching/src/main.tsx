import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import "./index.css";
import App from "./App";

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
