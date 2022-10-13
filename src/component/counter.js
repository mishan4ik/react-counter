import React, { useState } from "react";
function Counter() {

    const [count, SetCount] = useState(0);

    let add = () => {
        SetCount(count + 1);
    };
    let less = () => {
        SetCount(count - 1);
    }


    return (
      <div>
        <h1>Счетчик</h1>
        <h2>{count}</h2>
        <div className = "btns">
        <button onClick={add}>Плюс</button>
        <button onClick={less}>Минус</button>
        </div>
      </div>
    );
  }
  
  export default Counter;
  