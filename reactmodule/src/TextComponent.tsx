import React, { useState } from "react";

const TextComponent = (initialText: string) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const getFirstSentence = (text: string) => {
    const sentences = text.split(".");
    return sentences[0].trim();
  };

  return (
    <div>
      <div className="first-sentence">
        {showFullText ? initialText : getFirstSentence(initialText)}
      </div>
      <button onClick={toggleText}>
        {showFullText ? "Скрыть текст" : "Показать подробнее"}
      </button>
    </div>
  );
};

export default TextComponent;
