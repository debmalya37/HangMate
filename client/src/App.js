import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const authToken = cookies.AuthToken;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        {authToken && <Route path={"/Dashboard"} element={<Dashboard />} />}
        {authToken && <Route path={"/OnBoarding"} element={<OnBoarding />} />}
        <Route path={"/Explore"} element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
