import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 p-4 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <Container>
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="../images/logo4thofJune.svg" className="mr-3 h-4" alt="4thofJune" />
            
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
      </Container>
    </footer>
  );
}
