import Link from "next/link";

export default function Layout({ children }: any) {
  return (
    <>
      <header className="fixed w-full p-4 pl-6 bg-white shadow-md">
        <nav>
          <ul className="flex font-bold">
            <li className="pr-3">
              <Link href="/">Home</Link>
            </li>
            <li className="pr-3">
              <Link href="/create">Create</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-3 pt-20">{children}</main>
    </>
  );
}
