import { useState } from "react";
import { WordPair as WordPairType, BlindSide } from "@/types/types";
// import clsx from "clsx";

type Props = {
  pair: WordPairType;
  blindSide?: BlindSide; // TODO: enum?
};

export default function WordPair({ pair, blindSide = "ru" }: Props) {
  const [revealed, toggleRevealed] = useState(false);

  const blindOppositionMap = {
    eng: "ru",
    ru: "eng",
  };

  const currentVisibleSide = blindOppositionMap[blindSide];
  const currentBlindSide = blindOppositionMap[currentVisibleSide as BlindSide];

  const toggleVisibility = () => {
    toggleRevealed((revealed) => !revealed);
  };

  // TODO: fix casting
  return (
    <div onClick={toggleVisibility} className="w-full">
      <span className="text-md">
        {!revealed ? (
          pair[currentVisibleSide as BlindSide]
        ) : (
          <span className="text-sky-700">
            {pair[currentBlindSide as BlindSide]}
          </span>
        )}
      </span>
    </div>
  );
}
