import { ReactLenis } from "lenis/react";

const GalleryLayout = ({ children }) => {
  return (
    <ReactLenis root>
      <main className="relative w-full bg-black  bg-grid-white/[0.2]">
        {children}
      </main>
    </ReactLenis>
  );
};

export default GalleryLayout;
