import clsx from "clsx";
import MagneticComp from "../Magnetic/MagneticComp";
import Link from "next/link";

const ButtonOne = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <MagneticComp>
      <Link href="/reachus">
        <button
          id={id}
          className={clsx(
            "group relative z-10 w-fit cursor-pointer overflow-hidden  bg-yellow-300 px-6 py-3  text-black rounded-full",
            containerClass
          )}
        >
          {leftIcon}

          <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
              {title}
            </div>
            <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              {title}
            </div>
          </span>

          {rightIcon}
        </button>
      </Link>
    </MagneticComp>
  );
};

export default ButtonOne;
