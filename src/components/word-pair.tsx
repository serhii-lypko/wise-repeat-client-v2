import { useState } from "react";
// import { WordPair as WordPairType } from '#/types/types';
import clsx from "clsx";
import axios from "axios";

// type Props = {
//   pair: WordPairType;
//   blind: 'eng' | 'ru' | 'rand' | 'none';
// };

export default function WordPair({ pair }: any) {
  const [revealed, toggleRevealed] = useState(false);

  const toggleVisibility = () => {
    toggleRevealed((revealed) => !revealed);
  };

  return (
    <div onClick={toggleVisibility} className="w-full">
      <span className="text-md">
        {!revealed ? (
          pair.eng
        ) : (
          <span style={{ color: "#0284c7" }}>{pair.ru}</span>
        )}
      </span>
    </div>
  );
}
