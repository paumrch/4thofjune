import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <Container>
        <div className="mx-auto max-w-screen-xl text-center">
          <Link href="/">
            <h1 className="text-3xl text-center leading-none md:text-3xl font-semibold mb-4">
              4thOfJune
            </h1>
          </Link>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <p className="hover:underline">
              4thOfJune
            </p>
            . Todos los Derechos Reservados.
          </span>
        </div>
      </Container>
    </footer>
  );
}
