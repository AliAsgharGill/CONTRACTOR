"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { z } from "zod";
import { SearchValues } from "@/types/searchType";
import { searchSchema } from "@/app/schemas/serach-schema";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const route = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    route.refresh();
    route.push("/sign-in");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, [isLoggedIn]);

  const onSubmit = async (data: z.infer<typeof searchSchema>) => {
    console.log("Form submitted:", data);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const filteredResults = response.data.filter((user: any) =>
        user.name.toLowerCase().includes(data.search.toLowerCase())
      );
      console.log("Search successful Data:", filteredResults);
      setSearchResults(filteredResults);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to get book";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const form = useForm<SearchValues>({
    mode: "onTouched",
    defaultValues: {
      search: "",
    },
  });

  const { register, handleSubmit } = form;

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">LMS</span>
            <Image
              height={42}
              width={200}
              alt=""
              src="https://i.pinimg.com/736x/a7/91/0c/a7910cf32f182c9ea34022abb7839980.jpg"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </Button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/books"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Books
          </Link>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center space-x-2"
          >
            <input
              type="search"
              id="search"
              placeholder="Search book..."
              className="border border-black rounded p-2"
              {...register("search")}
            />
            <Button
              type="submit"
              className="text-sm font-semibold leading-6 text-white"
            >
              Search
            </Button>
          </form>
        </PopoverGroup>
        {isLoggedIn ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
            <Button
              onClick={handleLogout}
              className="text-sm font-semibold leading-6 text-white"
            >
              Log out
            </Button>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
            <Link
              href="/sign-in"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Register
            </Link>
          </div>
        )}
      </nav>

      {/* Mobile View */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only text-blue-500">LMS</span>
              <Image
                height={32}
                width={100}
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0rBIlDbRRXR5efoXBU57WPSTaqyyA7z_NA&s"
                className="h-8 w-auto"
              />
            </Link>
            <Button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>

              <div className="py-6 flex justify-start ">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Search Results Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {searchResults.map((result: any) => (
            <div key={result.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{result.name}</h3>
              <p>{result.email}</p>
              <p>{result.phone}</p>
              <Link
                href={`/books/${result.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}