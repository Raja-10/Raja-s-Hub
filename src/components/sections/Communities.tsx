"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import BentoCard from "@/components/ui/BentoCard";

const communities = [
  {
    organization: "Tamil Mandram, IIT Kanpur",
    role: "President",
    description:
      "Led cultural and community activities for 300–400 students through events, outreach programs and student engagement initiatives.",

    photos: [
      "/images/communities/tamil1.jpg",
      "/images/communities/tamil2.jpg",
      "/images/communities/tamil3.jpg",
    ],
  },

  {
    organization: "Student Guidance Cell, NIT Calicut",
    role: "President",
    description:
      "Coordinated academic mentoring, student welfare activities and peer-support initiatives across departments.",

    photos: [
      "/images/communities/sgc1.jpg",
      "/images/communities/sgc2.jpg",
      "/images/communities/sgc3.jpg",
    ],
  },

  {
    organization: "Team Unwired, NIT Calicut",
    role: "Suspension Team Lead • Social Media Head",
    description:
      "Designed suspension subsystem components, represented the team in SAE competitions and managed outreach activities.",

    photos: [
      "/images/communities/unwired1.jpg",
      "/images/communities/unwired2.jpg",
      "/images/communities/unwired3.jpg",
    ],
  },
];

export default function Communities() {
  return (
    <Section id="communities">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>
          Teams & Communities
        </SectionLabel>

        <div className="space-y-5">

          {communities.map((community) => (
            <BentoCard
              key={community.organization}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                {/* LEFT DETAILS */}

                <div className="lg:col-span-4">

                  <div className="text-accent text-xs uppercase tracking-wider mb-2">
                    {community.role}
                  </div>

                  <h3 className="text-white text-xl font-semibold mb-3">
                    {community.organization}
                  </h3>

                  <p className="text-secondary text-sm leading-relaxed">
                    {community.description}
                  </p>

                </div>

                {/* RIGHT PHOTO STRIP */}

                <div className="lg:col-span-8">

                  <div className="grid grid-cols-3 gap-3">

                    {community.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="
                          overflow-hidden
                          rounded-xl
                          border
                          border-white/5
                          bg-white/[0.02]
                          group
                        "
                      >
                        <img
                          src={photo}
                          alt={community.organization}
                          className="
                            h-40
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />
                      </div>
                    ))}

                  </div>

                </div>

              </div>
            </BentoCard>
          ))}

        </div>
      </div>
    </Section>
  );
}