import React from "react";

const TeamHero = () => {
  return (
    <section className="relative h-full w-full pt-[5rem] text-white">
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center pb-8">
          <h1 className="uppercase text-white text-4xl font-bold">Team</h1>
        </div>
        {/* Grid Container */}
        <div className="w-full h-full  bg-red-300">
          <div className="text-center pb-4">
            <h1 className="uppercase text-white text-2xl font-bold">Team</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {/* Team Member Cards - Repeat for each member */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 md:p-6"
              >
                {/* Image Container */}
                <div className="w-full aspect-square rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="/placeholder-avatar.jpg" // Replace with actual image
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                    John Doe
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-2">
                    CEO & Founder
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 line-clamp-3">
                    Experienced leader with 10+ years in tech industry.
                    Passionate about building great teams.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
