import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <Container>
        <div className="mx-auto max-w-screen-xl text-center">
          <Link href="/">
            <h1 className="text-3xl text-center leading-none md:text-3xl font-bold mb-4">
              4thOfJune
            </h1>
          </Link>
          {/* <ul className="flex flex-wrap justify-center items-center mt-6 mb-6 text-gray-900 dark:text-white">
            <li>
              <Link href="/">
                <a className="mr-4 hover:underline md:mr-6">Ideas</a>
              </Link>
            </li>
          </ul> */}
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="#" className="hover:underline">
              4thOfJune
            </a>
            . Todos los Derechos Reservados.
          </span>
        </div>
      </Container>
    </footer>
  );
}
