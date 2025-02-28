import { ReactLenis } from "lenis/react";

const ReachUsLayout = ({ children }) => {
  return (
    <ReactLenis root>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        {children}
      </main>
    </ReactLenis>
  );
};

export default ReachUsLayout;
