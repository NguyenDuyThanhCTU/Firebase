import Home from "../components/Home";
import FirestoreLite from "../components/FirestoreLite";
import Detail from "../components/Detail";
export const AllRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/lite",
    component: FirestoreLite,
  },
  {
    path: "/lite/:id",
    component: Detail,
  },
];
