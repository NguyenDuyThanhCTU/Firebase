import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AllRoutes } from "./routes";
import DefaultLayout from "./layout/DefaultLayout";
const App = () => {
  return (
    <Router>
      <Routes>
        {AllRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.Layout) Layout = route.Layout;
          else Layout = DefaultLayout;

          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
