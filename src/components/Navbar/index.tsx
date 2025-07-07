"use client"
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "Help & Advice",
    "Locations",
    "Contact Us"
  ];

  const handleLogin = () => {
    console.log("handleLogin()")
  }

  return (
    <nav className="relative flex items-center w-full mt-16 sm:mt-10 justify-between bg-white rounded-[20px] shadow-2xl relative z-20 pt-[13px] pb-[11px] pl-[26px] pr-[22px] lg:py-[14px] lg:pl-[35px] lg:pr-[50px]">
      {/* Hamburger (mobile only, left) */}
      <button
        className="sm:hidden mr-auto"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Open menu"
      >
        <Image src="/ic-burger-menu.svg" alt="burger menu icon" width={16} height={12} />
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-17 left-0 w-48 bg-white rounded-xl shadow-lg p-4 flex flex-col space-y-3 text-sm z-30">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#FD8121] transition text-[#253451] font-normal text-normal leading-[100%] tracking-normal py-2"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Logo (centered on mobile, left on desktop) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:static sm:translate-x-0 sm:translate-y-0 sm:flex items-center">
        <Image src="/ic-brand.svg" alt="topspeed logo" width={102} height={30} />
      </div>

      {/* Desktop Menu (centered absolutely on desktop) */}
      <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-6 items-center">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-[#FD8121] transition text-[#253451] font-normal text-[16px] leading-[100%] tracking-normal"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Login button (always right) */}
      <Button
        variant="secondary"
        className="ml-auto text-[14px] sm:text-base font-normal"
        leftIcon="/ic-user.svg"
        leftIconWidth={8}
        leftIconHeight={13}
        onClick={handleLogin}
      >
        Login
      </Button>
    </nav>

  );
}
