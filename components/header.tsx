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
  </header>
  );
}
