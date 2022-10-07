import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-3xl font-mono mb-20 mt-8">
      <Link href="/">
        <a
          href="https://www.4thofjune.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="../images/logo4thofJune.svg"
            className="mr-3 h-4"
            alt="4thofJune"
          />
        </a>
      </Link>
    </h2>
  );
}
