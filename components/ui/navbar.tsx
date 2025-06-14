"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between  items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 tracking-tighter"
            >
              7 Workflows
            </Link>
          </div>
          <div className="hidden md:block">
            <Button variant="default" size="sm" className="rounded-xl" asChild>
              <Link href={`mailto:ashutoshv262@gmail.com`}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
