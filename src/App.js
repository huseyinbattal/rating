import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "TEAM A",
      rate: 35,
      count: 200,
      color:
        "linear-gradient(90deg,rgba(255,255,255,1) 18%,rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%)",
    },
    {
      id: 2,
      name: "TEAM B",
      rate: 30,
      count: 170,
      color: "yellow",
    },
    {
      id: 3,
      name: "TEAM C",
      rate: 25,
      count: 100,
      color:
        "linear-gradient(90deg,rgba(217,62,62,0.980) 18%,rgba(211,230,16,1) 100%, rgba(255,255,255,1) 100%)",
    },
    {
      id: 4,
      name: "TEAM D",
      rate: 10,
      count: 75,
      color: "pink",
    },
  ]);
  const vote = (index) => {
    let x = data[index].count;
    setData(x);
  };
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",

              width: item.rate + "%",
              background: item.color,
            }}
          >
            {item.name}
            <p>Rate: {item.count}</p>
            <button onClick={() => vote(index)}>+</button>
          </div>
        );
      })}
      Dinamik Inline-CSS
    </div>
  );
}

export default App;
