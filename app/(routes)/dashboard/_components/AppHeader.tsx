import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const menuOptions = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "History", path: "/history" },
  { id: 3, name: "Pricing", path: "/pricing" },
  { id: 4, name: "Profile", path: "/profile" },
];

function AppHeader() {
  return (
    <div className="flex items-center justify-between p-4 shadow-md px-10 md:px-20 lg:px-40">
      <Image src="/logo.png" alt="Logo" width={120} height={60} />

      {/* Menu */}
      <div className="hidden md:flex gap-12 items-center">
        {menuOptions.map((option) => (
          <h1
            key={option.id}
            className="cursor-pointer hover:text-blue-600 transition-all"
          >
            {option.name}
          </h1>
        ))}
      </div>

      <UserButton />
    </div>
  );
}

export default AppHeader;
