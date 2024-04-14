import React from "react";

const Pills = ({ name, image, handleRemove }) => {
  return (
    <div className="pills">
      <img src={image} alt="" />
      <p>{name}</p>
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Pills;
