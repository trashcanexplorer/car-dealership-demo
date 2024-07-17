import Link from 'next/link'
import React, { useState, setState } from "react";

export default function Nav() {
    var [isHidden, setHidden] = useState(true);

    function toggleNav() {
        setHidden(!isHidden);
    }

    return (
        <nav class="fixed top-0 w-screen bg-black">
            <div class="container mx-auto flex items-center justify-between flex-wrap p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <Link href="/"><span class="font-semibold text-xl text-gold tracking-tight"><img class="max-w-32" src="/car-dealership-demo/img/logo.svg" /></span></Link>
                </div>
                <div class="block md:hidden">
                    <button onClick={toggleNav} class="flex items-center px-3 py-2 border rounded text-gold border-gold hover:text-white hover:border-white">
                        <svg class="fill-gold h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className={`${isHidden ? "max-h-0 ease-out" : "max-h-screen ease-in"} transition-[max-height] delay-100 overflow-hidden mt-4 w-full md:max-h-full md:block flex-grow md:flex md:items-center md:w-auto md:mt-0`}>
                    <div class="text-sm flex flex-col md:flex-grow md:flex-row justify-end border-t-2 border-gold md:border-none">
                        <Link href="/" class="block mt-4 md:inline-block md:mt-0 text-gold hover:text-white mr-4">
                        Home
                        </Link>
                        <Link href="/cars" class="block mt-4 md:inline-block md:mt-0 text-gold hover:text-white mr-4">
                        Cars
                        </Link>
                        <Link href="/service" class="block mt-4 md:inline-block md:mt-0 text-gold hover:text-white mr-4">
                        Service
                        </Link>
                        <Link href="/contact" class="block mt-4 md:inline-block md:mt-0 text-gold hover:text-white">
                        Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
  }