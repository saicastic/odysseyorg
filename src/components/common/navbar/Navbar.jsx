"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import ButtonOne from "@/components/utils/buttons/ButtonOne";

import navLinks from "@/data/navbar";
import Link from "next/link";

const NavBar = () => {
  // Refs for navigation container
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-2 z-[1000] h-14 transition-all duration-700 border-none rounded-full top-2 sm:top-4 sm:inset-x-6 bg-violet-300"
    >
      <header className="absolute w-full -translate-y-1/2 top-1/2">
        <nav className="flex items-center justify-between p-4 size-full">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Link href="/">
              <img src="/img/amity_logo.png" alt="logo" className="w-6" />
            </Link>

            {/* <ButtonOne
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 md:flex hidden h-[50%] items-center justify-center gap-1"
            /> */}
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex items-center h-full">
            <div className="hidden md:flex relative ">
              {navLinks.middle.map((item) => (
                <div key={item.id} className="nav-hover-btn relative ">
                  <Link href={`${item.path}`}>{item.title}</Link>
                  <div className="absolute top-[100%] right-0 w-10 h-1 rounded-full bg-violet-400">
                    hello
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-7">
            <ButtonOne
              id="product-button"
              title="Reach Us"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 md:flex hidden h-[50%] items-center justify-center gap-3"
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
