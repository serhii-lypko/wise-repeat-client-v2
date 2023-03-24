import { WordPair as WordPairType } from "@/types/types";
import WordPair from "@/components/word-pair";

type Props = {
  wordPairs: WordPairType[];
  blind?: "eng" | "ru";
};

export default function WordPairsList({ wordPairs, blind }: Props) {
  return (
    <div className="container mx-auto p-3">
      <ul>
        {wordPairs.map((pair: any) => (
          <li key={pair.id} className="mb-8">
            <WordPair pair={pair} blindSide={blind} />
          </li>
        ))}
      </ul>
    </div>
  );
}
