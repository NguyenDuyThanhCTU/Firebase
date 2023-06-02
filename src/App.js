import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AllRoutes } from "./Routes/index";
import DefaultLayout from "./Layout/DefaultLayout";
import AppProviders from "./Context/AppProviders";
const App = () => {
  return (
    <AppProviders>
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
    </AppProviders>
  );
};

export default App;
