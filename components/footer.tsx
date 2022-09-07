import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 p-4 pt-12 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <Container>
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="../images/logo4thofJune.svg" className="mr-3 h-4" alt="4thofJune" />
            
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Pau March</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Desarrollo</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Ideas</a>
            </li>
        </ul>
    </div>
    <span className="block text-sm sm:text-center">© 2022 <a href="/" className="hover:underline">4thofJune™</a>.
    </span>
      </Container>
    </footer>
  );
}
