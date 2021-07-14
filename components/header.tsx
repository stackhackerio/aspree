import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export const services = [
  { name: "料金", href: "/" },
  { name: "コンタクト", href: "/contact" },
  { name: "サービス", href: "/" },
  { name: "会社情報", href: "/" },
];

function Logo() {
  return (
    <>
      <div className="inline-flex items-center">
        <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
        <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
          aspree
        </h2>
      </div>
    </>
  );
}

function Button() {
  return (
    <div className="flex w-full">
      <Link href="/contact">
        <a className="w-full text-center px-6 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 ">
          お問い合わせ
        </a>
      </Link>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <div className="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
        <div className="relative">
          <div className="flex flex-wrap p-5 max-w-7xl mx-auto items-center flex-row">
            <Link href="/">
              <a className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                <Logo />
              </a>
            </Link>
            <nav className="hidden md:flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
              <ul className="items-center inline-block list-none md:inline-flex">
                {services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:block">
              <Button />
            </div>
            <Popover className="md:hidden ml-auto">
              {({ open }) => (
                <>
                  <Popover.Button className="w-auto bg-white rounded-md p-2 items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">メニューを開く</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      static
                      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                          <div className="flex items-center justify-between">
                            <Logo />
                            <div className="-mr-2">
                              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">
                                  メニューを閉じる
                                </span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {services.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="py-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                          <Button />
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}
