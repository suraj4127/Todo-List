import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputEl = useRef();
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const change = (e) => {
    if (e.key === "Enter") {
      setValue(e.target.value);
      setData([...data, value]);
      setValue("");
    }
  };

  useEffect(() => {
    inputEl.current.focus();
    console.log("rendered");
  }, []);

  return (
    <div className="App">
      <div className="container-wrapper">
        <div className="header">
          <h1>Things to DO</h1>
          <input
            type="text"
            placeholder="Add New"
            ref={inputEl}
            value={value}
            onKeyDown={change}
            onChange={(e) => setValue(e.target.value)}
            // onChange={(e) => e.key === "Enter" && HandleSearch()}
          />
        </div>
        <div>
          {Array.from(data).map((list, i) => {
            return (
              <div key={i} className="items" >
                <input type="checkbox" />
                <li key={i}>{list}</li>
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="icons">
            <i className="fa fa-search"></i>
            <h1>+</h1>
          </div>
          <span>{data.length} Items left</span>
          <div className="button btn">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
