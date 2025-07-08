"use client"
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import Link from "next/link";


export function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {name: "Help & Advice", href: "/help-advice"},
    {name: "Locations", href: "/locations"},
    {name: "Contact Us", href: "/contact-us"}
  ];

  const handleLogin = () => {
    console.log("handleLogin()")
  }

  return (
    <nav aria-label="Main navigation" className="z-20 relative flex items-center w-full mt-16 lg:mt-10 justify-between bg-white rounded-[20px] shadow-2xl pt-[13px] pb-[11px] pl-[26px] pr-[22px] lg:py-[14px] lg:pl-[35px] lg:pr-[50px]">
      {/* Hamburger (mobile only, left) */}
      <button
        className="lg:hidden mr-auto"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <Image src="/ic-burger-menu.svg" alt="burger menu icon" width={16} height={12} />
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul id="mobile-menu" className="lg:hidden absolute top-17 left-0 w-48 bg-white rounded-xl shadow-lg p-4 flex flex-col space-y-3 text-sm z-30">
          {menuItems.map((item, index) => (
            <li key={index} >
              <Link
                href={item.href}
                className="hover:text-[#FD8121] transition text-[#253451] font-normal text-normal leading-[100%] tracking-normal py-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Logo (centered on mobile, left on desktop) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 lg:flex items-center">
        <Link href="/">
          <Image src="/logo-topspeed.svg" alt="topspeed logo" width={102} height={30} />
        </Link>
      </div>

      {/* Desktop Menu (centered absolutely on desktop) */}
      <ul className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-6 items-center">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
            key={index}
            href={item.href}
            className="hover:text-[#FD8121] transition text-[#253451] font-normal text-[16px] leading-[100%] tracking-normal"
            >
              {item.name }
            </Link>
          </li>
        ))}
      </ul>

      {/* Login button (always right) */}
      <Button
        variant="secondary"
        className="ml-auto text-[14px] lg:text-base font-normal"
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
