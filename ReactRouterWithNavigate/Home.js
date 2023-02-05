import React, { useState, useEffect } from "react";

const Home = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let getapi = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await getapi.json();
      setData(res);
    }
    getData();
  }, [state]);
  return (
    <div>
      <button className="btn" onClick={() => setState(state + 1)}>
        {state}
      </button>
      {data.map((element, index) => {
        return (
          <div className="data">
            <h1>key={index}</h1>
            <h1>{element.firstName}</h1>
            <h1>{element.lastName}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
