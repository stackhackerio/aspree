import { services } from "./header";
import Facebook from "./icons/facebook";
import Twitter from "./icons/twitter";
import Instagram from "./icons/instagram";
import Linkedin from "./icons/linkedin";

export default function Footer() {
  return (
    <footer className="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
      <div className="flex flex-col flex-wrap justify-center p-5 md:flex-row">
        <nav className="flex flex-wrap items-center justify-center w-full mx-auto mb-6 text-base nprd">
          {services.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
            >
              {item.name}
            </a>
          ))}
        </nav>
        <span className="inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0">
          <a className="text-blue-500 hover:text-black">
            <Facebook />
          </a>
          <a className="ml-3 text-blue-500 hover:text-black">
            <Twitter />
          </a>
          <a className="ml-3 text-blue-500 hover:text-black">
            <Instagram />
          </a>
          <a className="ml-3 text-blue-500 hover:text-black">
            <Linkedin />
          </a>
        </span>
      </div>
      <div className="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
        <p className="px-5 py-6 text-sm text-center text-black">© 2021</p>
      </div>
    </footer>
  );
}
