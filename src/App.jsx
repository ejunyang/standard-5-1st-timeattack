import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");

  const addNum = (num) => {
    setNumber(num + number);
  };

  const subNum = (num) => {
    setNumber(number - num);
  };

  const initNum = () => {
    setNumber("");
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={number} onChange={(e) => setNumber(e.target.value)} />{" "}
        만큼을 <button onClick={addNum}>더할게요</button>{" "}
        <button onClick={subNum}>뺄게요</button>
        <button onClick={initNum}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number}</p>
      </div>
    </div>
  );
}
