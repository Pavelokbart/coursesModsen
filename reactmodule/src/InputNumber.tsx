import React, { useState } from "react";

const InputNumber = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (value: any) => {
    const numValue = Number(value);
    setInputValue(value);

    if (numValue > 0) {
      setMessage("Число больше нуля");
    } else if (numValue < 0) {
      setMessage("Число меньше нуля");
    } else {
      setMessage("");
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => handleInput(e.target.value)}
        type="text"
      />
      <Message message={message} />
    </div>
  );
};

const Message = (message: any) => {
  return <p>{message}</p>;
};

export default InputNumber;
