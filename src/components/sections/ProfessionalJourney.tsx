
"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import BentoCard from "@/components/ui/BentoCard";

export default function ProfessionalJourney() {
  const projects = [
    {
      title: "Flow Matching Policy Framework",
      subtitle: "PhD Thesis",
      description:
        "Context- and Motion-Aware Flow-Matching Policy Framework for real-time robotic manipulation.",
      image: "/images/projects/flow-matching.jpg",
    },
    {
      title: "5-DOF Manipulator",
      subtitle: "Research Project",
      description:
        "Hardware and software development of a robotic manipulator with ROS-based architecture.",
      image: "/images/projects/manipulator.jpg",
    },
    {
      title: "Stereo Vision",
      subtitle: "Internship",
      description:
        "Marker-based pose estimation pipeline using stereo cameras.",
      image: "/images/projects/stereo.jpg",
    },
    {
      title: "CDPR Analysis",
      subtitle: "Internship",
      description:
        "Cable Driven Parallel Robot kinematics and workspace analysis.",
      image: "/images/projects/cdpr.jpg",
    },
    {
      title: "Quadruped Robot",
      subtitle: "Self Project",
      description:
        "Robot design, control and simulation platform.",
      image: "/images/projects/quadruped.jpg",
    },
    {
      title: "Delta Robot",
      subtitle: "Self Project",
      description:
        "Kinematics, workspace analysis and simulation.",
      image: "/images/projects/delta.jpg",
    },
  ];

  return (
    <Section id="journey">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>
          Professional Journey
        </SectionLabel>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Academics */}

          <BentoCard>
            <h3 className="text-xl font-semibold text-white mb-6">
              Academic Qualifications
            </h3>

            <div className="space-y-5">

              <div className="border-l-2 border-accent pl-4">
                <div className="text-accent text-xs mb-1">
                  2023 - Present
                </div>

                <h4 className="text-white font-medium">
                  Direct PhD
                </h4>

                <p className="text-secondary text-sm">
                  Indian Institute of Technology Kanpur
                </p>

                <p className="text-accent text-sm mt-1">
                  CPI: 8.8 / 10
                </p>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <div className="text-accent text-xs mb-1">
                  2019 - 2023
                </div>

                <h4 className="text-white font-medium">
                  B.Tech
                </h4>

                <p className="text-secondary text-sm">
                  National Institute of Technology Calicut
                </p>

                <p className="text-accent text-sm mt-1">
                  CPI: 7.8 / 10
                </p>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <div className="text-accent text-xs mb-1">
                  2019
                </div>

                <h4 className="text-white font-medium">
                  HSC (XII)
                </h4>

                <p className="text-secondary text-sm">
                  Sri Chaitanya, Hyderabad
                </p>

                <p className="text-accent text-sm mt-1">
                  90.4%
                </p>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <div className="text-accent text-xs mb-1">
                  2017
                </div>

                <h4 className="text-white font-medium">
                  SSC (X)
                </h4>

                <p className="text-secondary text-sm">
                  Campion Anglo Indian Hr. Sec. School
                </p>

                <p className="text-accent text-sm mt-1">
                  94.4%
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <p className="text-secondary text-sm">
                rajayg23@iitk.ac.in
              </p>

              <p className="text-secondary text-sm mt-1">
                +91 7904121512
              </p>
            </div>
          </BentoCard>

          {/* Publications */}

          <BentoCard>
            <h3 className="text-xl font-semibold text-white mb-6">
              Publications
            </h3>

            <div className="space-y-6">

              <div className="border-l-2 border-accent pl-4">
                <h4 className="text-white text-sm font-medium leading-relaxed">
                  QDD Based Collaborative Robot for Mobile Platforms
                </h4>

                <p className="text-secondary text-xs mt-2">
                  Rajayogeshwar G, Avinash Bhashkar,
                  Amritanshu Manu, Nimesh Khandelwal,
                  Shakti Singh Gupta
                </p>

                <p className="text-accent text-xs mt-3">
                  AIR 2025 • IIT Jodhpur
                </p>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <h4 className="text-white text-sm font-medium leading-relaxed">
                  Milled Surface Defect Detection and Classification
                  using YOLO Algorithm
                </h4>

                <p className="text-secondary text-xs mt-2">
                  Vishwas Rajaram, Yash Ingle,
                  Rajayogeshwar G, A. Pramod,
                  K. Deepak Lawrence
                </p>

                <p className="text-accent text-xs mt-3">
                  Springer LNME 2025
                </p>
              </div>

            </div>
          </BentoCard>

          {/* Projects Dashboard */}

          <BentoCard>

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">
                Projects
              </h3>

              <span className="text-xs text-secondary">
                {projects.length}+ Projects
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">

              {projects.map((project) => (
                <div
                  key={project.title}
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/5
                    bg-white/[0.02]
                    hover:border-accent/20
                    transition-all
                    duration-300
                    group
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-24
                      w-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-300
                    "
                  />

                  <div className="p-3">
                    <p className="text-accent text-[10px] uppercase tracking-wider mb-1">
                      {project.subtitle}
                    </p>

                    <h4 className="text-white text-sm font-medium leading-tight">
                      {project.title}
                    </h4>

                    <p className="text-secondary text-[11px] mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </BentoCard>

        </div>
      </div>
    </Section>
  );
}

