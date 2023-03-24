import { WordPair as WordPairType } from "@/types/types";

export async function getWordPairs(): Promise<WordPairType[]> {
  const res = await fetch(`https://wr-api.sl-tech-playground.com`);
  const data = await res.json();

  return data;
}
