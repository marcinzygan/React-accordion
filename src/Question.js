import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [isInfo, setIsInfo] = useState(false);

  const toggleInfo = function () {
    setIsInfo(!isInfo);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleInfo}>
          {isInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
