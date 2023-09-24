import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Tween } from "react-gsap";

import AnimatedLink from "./animatables/AnimatedLink";
import { navLinks } from "./Header";

type Props = {
  entryAnimation?: boolean;
};

export default function MobileMenu({ entryAnimation }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        <Tween
          {...(entryAnimation && {
            from: { yPercent: 100 },
            to: { yPercent: 0, duration: 1.5, ease: "power4" },
          })}
        >
          <button type="button" onClick={() => setIsOpen(true)}>
            Menu
          </button>
        </Tween>
      </div>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 w-full overflow-hidden pointer-events-none">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <Dialog.Panel className="relative w-screen pointer-events-auto">
                <div className="h-full shadow-xl text-textPrimary bg-primary doc-padding">
                  <nav className="flex flex-col pl-6 gap-14">
                    {navLinks.map(({ href, label }, idx) => (
                      <AnimatedLink
                        key={href}
                        href={href}
                        label={label}
                        index={idx}
                      />
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
