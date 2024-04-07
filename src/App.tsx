import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";

interface IRoute {
  path: string;
  element: JSX.Element;
}

const customStyles = {
  mainBox: {
    m: -1,
  },
};

const App = () => {
  const appRoutes: IRoute[] = [{ path: "/", element: <Home /> }];

  return (
    <Box sx={customStyles.mainBox}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {appRoutes.map(({ element, path }, index) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </Box>
  );
};

export default App;
