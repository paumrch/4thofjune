import Link from "next/link";

export default function Header() {
  return (
    <header className="flex-col md:flex-col flex items-center md:justify-between mt-12 mb-12">
    <Link href="/">
      <h1 className="text-3xl text-center leading-none md:text-3xl font-semibold">
        4thOfJune
      </h1>
    </Link>
    <span className="text-center font-mono md:text-center text-sm mt-5">
      Escrito por Pau March.
    </span>

    {/* <div className="justify-between items-center text-center w-full lg:flex lg:w-auto">
      <ul className="flex flex-row flex-wrap justify-center text-sm	font-mono font-semibold mt-3 mb-3 lg:space-x-8 lg:mt-6">
        <li>
          <a href="/" className="uppercase mr-4 mb-4">
            Ideas
          </a>
        </li>
      </ul>
    </div> */}
  </header>
  );
}
