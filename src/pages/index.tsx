import Head from "next/head";

import WordsList from "@/components/words-list";

import { shuffle } from "@/utils";
import { getWordPairs } from "@/lib/api";

export default function Home({ data }: any) {
  return (
    <>
      <main>
        <WordsList wordPairs={data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getWordPairs();
  return { props: { data: shuffle(data) } };
}
