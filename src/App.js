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
      color: "linear-gradient(90deg,rgba(216,217,62,0.9808298319327731) 18%,rgba(18,51,209,1) 100%, rgba(255,255,255,1) 100%)",
    },
    {
      id: 3,
      name: "TEAM C",
      rate: 25,
      count: 100,
      color:
        "linear-gradient(90deg,rgba(217,62,62,0.9808298319327731) 18%,rgba(211,230,16,1) 100%, rgba(255,255,255,1) 100%)",
    },
    {
      id: 4,
      name: "TEAM D",
      rate: 20,
      count: 75,
      color: "linear-gradient(90deg,rgba(62,143,217,0.9808298319327731) 18%,rgba(170,16,230,1) 100%, rgba(255,255,255,1) 100%)",
    },
  ]);
  const vote = (index) => {
    const copyArr = [...data];
    copyArr[index].rate += 10;
    setData(copyArr);
  };

  const reset = () => {
    const copyArr = [...data];
    copyArr[0].rate = 20;
    copyArr[1].rate = 20;
    copyArr[2].rate = 20;
    copyArr[3].rate = 20;
    setData(copyArr);
  };
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              color: "white",
              fontWeight:"bold",
             marginBottom:"10px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              width: item.rate + "%",
              background: item.color,
            }}
          >
            {item.name}
            <p>Rate: {item.rate}</p>
            <button onClick={() => vote(index)}>+</button>
          </div>
        );
      })}
      <hr />
      <button className="button" onClick={reset}>Reset</button>
      <br />
      <h1> Dynamic Inline CSS</h1>
    </div>
  );
}

export default App;
