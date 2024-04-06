import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { colorPalette } from "./shared/utils/constants";
import Home from "./pages/Home";

interface IRoute {
  path: string;
  element: JSX.Element;
}

const customStyles = {
  mainBox: {
    // background: colorPalette.blackGrey,
    minHeight: "100vh",
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
