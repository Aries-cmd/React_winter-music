import React from "react";
import reactDom from "react-dom";
import { BrowserRouter} from "react-router-dom";

// 导入初始化 css
import "@/assets/css/reset.css";

import App from "./App";

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
