import Link from "next/link";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <>
      <header className="fixed w-full p-4 pl-6 bg-white shadow-md">
        <nav>
          <ul className="flex justify-between font-bold">
            <div className="flex">
              <li className="mr-4">
                <Link href="/">Eng</Link>
              </li>
              <li className="mr-4">
                <Link href="/ru">Ru</Link>
              </li>
            </div>
            <li className="pr-3 text-slate-700">
              <Link href="/create">Create</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-3 pt-20">{children}</main>
    </>
  );
}
