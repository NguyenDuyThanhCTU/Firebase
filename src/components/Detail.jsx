import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocumentLite } from "../config/firebase/service/FireStoreLite";
const Detail = () => {
  const { id } = useParams();
  const [FetchData, setFetchData] = useState();

  useEffect(() => {
    getDocumentLite("Firebase", id).then((data) => setFetchData(data));
  }, []);
  console.log(FetchData);
  return (
    <div>
      <p>Name: {FetchData?.name}</p>
      <p>age: {FetchData?.age}</p>
      <p>id: {FetchData?.id}</p>
    </div>
  );
};

export default Detail;
