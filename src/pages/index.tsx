import Head from "next/head";
import WordPair from "@/components/word-pair";
import { WordPair as WordPairType } from "@/types/types";

export default function Home({ data }: any) {
  return (
    <>
      <Head>
        <title>Wise Repeat V2</title>
        <meta name="description" content="Wise repeat v2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto p-3">
          <ul>
            {data.map((pair: any) => (
              <li key={pair.id} className="mb-8">
                <WordPair pair={pair} blind="ru" />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

/* Fisher–Yates shuffle */
function shuffle(data: WordPairType[]) {
  for (let i = data.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i - 0 + 1)) + 0;
    [data[i], data[rand]] = [data[rand], data[i]];
  }

  return data;
}

export async function getServerSideProps() {
  const res = await fetch(`https://wr-api.sl-tech-playground.com`);
  const data = await res.json();

  return { props: { data: shuffle(data) } };
}
