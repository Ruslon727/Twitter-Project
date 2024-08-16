import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TokenContext } from "./context/context.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import App from "./App.jsx"
import "./App.css";

library.add(fas);


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TokenContext>
      <main className="dark:bg-black px-[100px]">
          <App />
      </main>
    </TokenContext>
  </BrowserRouter>
);
