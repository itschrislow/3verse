/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, CreditCardIcon } from "@heroicons/react/solid";

import { navigation, TABS } from "../lib/constants";
import Balance from "./Balance";
import Article from "./Article";

interface LayoutProps {
  currTab: TABS;
  handleTabChange: (tab: TABS) => void;
  isWalletConnected: boolean;
  handleConnectWallet: () => void;
  handleDisconnectWallet: () => void;
  treeTokenBalance: number;
  stakedTreeTokenBalance: number;
  o2TokenBalance: number;
  children: React.ReactNode;
}

export default function Layout({
  currTab,
  handleTabChange,
  isWalletConnected,
  handleConnectWallet,
  handleDisconnectWallet,
  treeTokenBalance,
  stakedTreeTokenBalance,
  o2TokenBalance,
  children,
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {/* Mobile sidebar */}
        {/* Ignore for now */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                        alt="Workflow"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          className={`
                            ${
                              currTab === item.name
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            }
                            group flex items-center rounded-md px-2 py-2 text-base font-medium
                          `}
                        >
                          <item.icon
                            className={`
                              mr-4 h-6 w-6 flex-shrink-0 text-white
                            `}
                            aria-hidden="true"
                          />
                          {item.name}
                        </button>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Desktop sidebar */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-black">
            <div className="flex flex-1 flex-col overflow-y-auto py-6">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/static/logo_white.png"
                  alt="3verse"
                />
                <p className="ml-2 font-mono text-white">3verse</p>
              </div>
              <nav className="mt-5 flex-1 space-y-1 px-2">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => handleTabChange(item.name)}
                      className={`
                      ${
                        currTab === item.name
                          ? "bg-gray-800 text-white"
                          : "text-gray-300 hover:bg-gray-900 hover:text-white"
                      }
                      group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium
                    `}
                    >
                      <item.icon
                        className={`
                        mr-3 h-6 w-6 flex-shrink-0 rounded-md bg-primary p-1 text-white
                      `}
                        aria-hidden="true"
                      />
                      {item.name}
                    </button>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex h-screen flex-col overflow-y-auto bg-black pt-6 pb-4 sm:pb-6 lg:pb-8">
            {/* SIDEBAR */}
            <div className="mx-auto mb-4 flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* TAB NAME */}
              <h1 className="text-left text-2xl font-semibold text-white">
                {currTab}
              </h1>
              {/* CONNECT WALLET BUTTON */}
              <button
                onClick={() =>
                  isWalletConnected
                    ? handleDisconnectWallet()
                    : handleConnectWallet()
                }
                className={`
                button flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-gray-900`}
              >
                {!isWalletConnected && (
                  <CreditCardIcon
                    className={`
                    mr-2 h-4 w-4 flex-shrink-0 rounded-md text-white
                  `}
                    aria-hidden="true"
                  />
                )}
                {isWalletConnected ? "Disconnect" : "Connect"}
              </button>
            </div>
            {/* DASHBOARD */}
            <div className="flex grow gap-4 px-4 sm:px-6 md:px-8">
              <div className="h-full w-2/3">
                <div className="h-full rounded-lg bg-gray-900 p-4 text-white">
                  {children}
                </div>
              </div>
              <div className="flex w-1/3 flex-col gap-4">
                <div className="h-1/2 rounded-lg bg-gray-900">
                  <Balance
                    treeTokenBalance={treeTokenBalance}
                    stakedTreeTokenBalance={stakedTreeTokenBalance}
                    o2TokenBalance={o2TokenBalance}
                  />
                </div>
                <div className="flex h-1/2 items-center justify-center">
                  <Article />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
