import React, { useContext, useEffect, useState } from "react";
import {
  addDocumentLite,
  getDocumentsLite,
} from "../Config/firebase/service/FireStoreLite";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppProviders";

const FirestoreLite = () => {
  const { setId } = useContext(AppContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [click, setClick] = useState(false);
  const [FetchData, setFetchData] = useState([]);

  const handleSubmit = (e) => {
    setId("sudo");
    // const data = {
    //   name: name,
    //   age: age,
    // };
    // e.preventDefault();
    // addDocumentLite("Firebase", data).then(() => setClick(true));
    // setName("");
    // setAge("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocumentsLite("Firebase");
      setFetchData(data);
    };
    fetchData();
    setClick(false);
  }, [click]);

  console.log(FetchData);

  return (
    <div className="flex justify-center gap-10 mt-10">
      <div className="flex gap-3 flex-col">
        <div className="flex flex-col border rounded-lg p-3">
          <label className="mb-1">Tên: </label>
          <div className="p-3 ">
            <input
              type="text"
              value={name}
              className="outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col border rounded-lg p-3">
          <label className="mb-1">Tuổi: </label>
          <div className="p-3 ">
            <input
              // value={age}
              type="text"
              className="outline-none"
              // onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <p>Tên bạn là:</p>
        <p>Tuổi bạn là:</p>
        <div>
          {FetchData.map((item) => (
            <Link to={`${item.id}`}>
              <div className="flex flex-rol gap-10  ">
                <div className="border p-3 w-full mb-3 hover:bg-fuchsia-300">
                  <p className="">{item.name}</p>
                  <p>{item.age}</p>
                  <p>{item.id}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default FirestoreLite;
