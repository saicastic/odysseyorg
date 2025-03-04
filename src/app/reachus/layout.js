import { ReactLenis } from "lenis/react";

const ReachUsLayout = ({ children }) => {
  return (
    <ReactLenis root>
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-black  bg-grid-white/[0.2]">
        {children}
      </main>
    </ReactLenis>
  );
};

export default ReachUsLayout;
