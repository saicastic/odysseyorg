"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";

import ButtonOne from "@/components/utils/buttons/ButtonOne";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/utils/sheet/Sheet";

import navLinks from "@/data/navbar";
import Link from "next/link";
import "./navbar.css";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

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

  useGSAP(() => {
    document.querySelectorAll(".navLink").forEach((el) => {
      gsap.set(".navDailog", {
        opacity: 0,
        transform:
          "translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)",
        transformOrigin: "50% 50% -150px !important",
      });
      // mouse enter anim
      el.addEventListener("mouseover", (e) => {
        gsap.to(e.target.parentNode.querySelector(".navDailog"), {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
        });
      });
      // mouse leave anim
      el.addEventListener("mouseleave", (e) => {
        gsap.to(e.target.parentNode.querySelector(".navDailog"), {
          opacity: 0,
          delay: 0.5,
          transform:
            "translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)",
          transformOrigin: "50% 50% -150px !important",
        });
      });
    });

    document.querySelectorAll(".navDailog").forEach((el) => {
      // mouse enter anim

      gsap.set(".navDailog", {
        opacity: 0,
        transform:
          "translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)",
      });

      el.addEventListener("mouseover", (e) => {
        gsap.to(e.target.parentNode.parentNode, {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
        });
      });
      // mouse leave anim
      el.addEventListener("mouseleave", (e) => {
        gsap.to(e.target, {
          opacity: 0,
        });
      });
    });
  });

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-2 z-[1000] h-14 transition-all duration-700 border-none rounded-full top-2 sm:top-4 sm:inset-x-6 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-500"
    >
      <header className="absolute w-full -translate-y-1/2 top-1/2">
        <nav className="flex items-center justify-between p-4 size-full">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7 h-full w-[7.5rem]">
            <Link href="/" className="h-full w-full">
              <Image
                src="/img/headerlogo.svg"
                alt="logo"
                className="w-[100%]"
                width={400}
                height={400}
              />
            </Link>

            {/* <ButtonOne
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 md:flex hidden h-[50%] items-center justify-center gap-1"
            /> */}
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="hidden md:flex items-center gap-[2.5rem]">
            <div className="flex items-center h-full">
              <div className="hidden md:flex relative ">
                {navLinks.middle.map((item) => (
                  <div key={item.id} className="  nav-hover-btn relative">
                    <Link
                      className="navLink text-black font-bold text-base"
                      href={`${item.path}`}
                    >
                      {item.title}
                    </Link>

                    {item.dialog && (
                      <div className="navDailog absolute top-[100%] bg-yellow-400 text-black rounded-[0.2rem] px-2 opacity-0">
                        {item.dialog.map((el) => (
                          <div
                            key={el.id}
                            className=" py-1 pr-4 border-b-[1px] border-b-slate-400"
                          >
                            <Link href={el.path} className="w-fit">
                              {el.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-7">
              <ButtonOne
                id="product-button"
                title="Reach Us"
                rightIcon={<TiLocationArrow />}
                containerClass="!bg-black text-white text-base font-bold md:flex hidden h-[50%] items-center justify-center gap-3"
              />
            </div>
          </div>
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <GiHamburgerMenu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Index</SheetTitle>
                </SheetHeader>
                <div className="w-full h-full bg-red-500"></div>
                <SheetFooter>
                  <SheetClose asChild>Close</SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
