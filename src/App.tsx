import { BrowserRouter } from "react-router-dom";
import Routes from "./pages/routes";

// TODO 缩放

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
