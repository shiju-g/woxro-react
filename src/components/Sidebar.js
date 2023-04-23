import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdCloseCircle } from "react-icons/io";

const navData = [
  {
    id: 1,
    text: "Home",
  },
  {
    id: 2,
    text: "About Us",
  },
  {
    id: 3,
    text: "Services",
  },
  {
    id: 8,
    text: "Technology",
  },
  {
    id: 4,
    text: "Careers",
  },
  {
    id: 5,
    text: "Blogs",
  },
  {
    id: 6,
    text: "Our Works",
  },
  {
    id: 7,
    text: "Contact Us",
  },
];

export default function Sidebar({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="bg-black w-full h-full p-5">
                    <button
                      onClick={() => setOpen(false)}
                      className="text-white"
                    >
                      <IoMdCloseCircle className="w-8 h-8" />
                    </button>
                    <div className="text-white mt-5">
                      {navData &&
                        navData.map((item) => (
                          <p
                            className="my-3 text-lg text-gray-500 hover:text-white cursor-pointer"
                            key={item.id}
                          >
                            {item.text}
                          </p>
                        ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
