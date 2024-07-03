import React, { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      console.log("Значение ввода:", inputValue);
    }
  };

  return (
    <div className="App">
      <form>
        <input ref={inputRef} type="text" />
        <button onClick={handleButtonClick}>Отправить</button>
      </form>
    </div>
  );
}

export default App;
