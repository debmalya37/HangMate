import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Dashboard"} element={<Dashboard />} />
        <Route path={"/OnBoarding"} element={<OnBoarding />} />
        <Route path={"/Explore"} element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
