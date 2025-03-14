import team from "@/data/team";
import Image from "next/image";
import React, { memo } from "react";

const TeamHero = () => {
  return (
    <section className="relative h-full w-full pt-[5rem] text-white">
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center pb-8">
          <h1 className="uppercase text-white text-4xl font-bold">Team</h1>
        </div>
        {/* Grid Container */}
        {team.map((teamsec) => (
          <div key={teamsec.id} className="w-full h-full pb-6">
            <div className="text-center pb-4">
              <h1 className="uppercase text-white text-2xl font-bold">
                {teamsec.team_sec_name}
              </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
              {/* Team Member Cards - Repeat for each member */}
              {teamsec.member.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-2 md:p-6"
                >
                  {/* Image Container */}
                  <div className="w-full aspect-square rounded-lg overflow-hidden mx-auto mb-4">
                    <Image
                      src="/img/shrine.jpg"
                      width={100}
                      height={100}
                      alt="shrine"
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamHero;
