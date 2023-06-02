import React, { useContext } from "react";
import { AppContext } from "../Context/AppProviders";
const Home = () => {
  const { id } = useContext(AppContext);
  return <div>Home {id}</div>;
};

export default Home;
