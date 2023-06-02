import Home from "../Components/Home";
import FirestoreLite from "../Components/FirestoreLite";
import Detail from "../Components/Detail";
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
