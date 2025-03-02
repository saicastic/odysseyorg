import React from "react";

const Footer = () => {
  return (
    <footer className=" absolute h-[30rem] w-full bottom-0 p-2">
      <div className="bg-yellow-400 w-full h-full rounded-md flex flex-col p-1">
        {/* heading  */}
        <div>
          <h1>ODYSSEY</h1>
        </div>

        {/* bottom part  */}
        <div className="w-full">
          {/* links  */}
          <div className="w-full"></div>

          {/* copyright  */}
          <div className="w-full flex justify-between text-[0.50rem]">
            <div>© Odyssey 2025. All Rights Reserved.</div>
            <div>Designed and Developed by Website Team - Odyssey 2025</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
