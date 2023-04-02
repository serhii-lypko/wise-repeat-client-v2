import { WordPair as WordPairType } from "@/types/types";

export async function getWordPairs(): Promise<WordPairType[]> {
  // const url = new URL("/", process.env.BASE_API_URL);
  const url = new URL("/", "https://wr-api.sl-tech-playground.com");
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
