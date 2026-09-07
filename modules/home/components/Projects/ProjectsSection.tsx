"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import SectionHeading from "../../../../components/SectionHeading";
import Paragraph from "../../../../components/paragraph/Paragraph";
import Button from "../../../../components/Button";

const projectData: {
  title: string;
  subTitle: string;
  year: string;
  img: string;
  video?: string;
}[] = [
    {
      title: "Perpx",
      subTitle: "AI-powered research and chat platform",
      year: "2026",
      img: "https://i.pinimg.com/736x/09/66/56/0966567bd74650ab2ef5bf07a1c500e4.jpg",
      video: "",
    },
    {
      title: "PixKit",
      subTitle: "Media management SDK",
      year: "2026",
      img: "https://i.pinimg.com/736x/02/97/1b/02971b2262a83c859a8edf10132bcb8c.jpg",
      video: "",
    },
    {
      title: "Aayeshol",
      subTitle: "AI-powered social media management platform",
      year: "2026",
      img: "https://i.pinimg.com/736x/f8/67/f8/f867f87a305d8b97ff6754cbb85e7622.jpg",
      video: "",
    },
    {
      title: "Nick D Studio",
      subTitle: "Branding and web development studio",
      year: "2025",
      img: "https://i.pinimg.com/736x/45/2c/fe/452cfe92eccba429deb696a7c68635d0.jpg",
      video: "",
    },
  ];

interface ProjectCardProps {
  project: (typeof projectData)[number];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-15%", "15%"]
  );

  const isOddCard = index % 2 === 1;

  return (
    <div ref={cardRef} className={`w-full flex flex-col gap-6.5 ${isOddCard && 'mt-55'}`}>
      <div className="w-full h-80 md:h-250 overflow-hidden relative">
        <motion.img
          src={project.img}
          alt={project.title}
          style={{ y: imageY }}
          className="w-full h-[130%] object-cover relative top-[-15%]"
        />
      </div>

      <div className="space-y-3">
        <div className="w-full flex items-end justify-between">
          <h1 className="text-5xl tracking-[-0.04em]">{project.title}</h1>

          <span>{project.year}</span>
        </div>

        <div>
          <p className="text-lg font-helveticaMediumItalic text-foreground/70 leading-none">{project.subTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="w-full px-12 py-24 pb-50 space-y-12 bg-background relative z-10">
      <div className="border-t border-gray-300 flex flex-col gap-8 pt-10 tracking-[-0.04em]">
        <SectionHeading title="Projects" />

        <div className="flex items-end justify-between">
          <Paragraph
            offset={["start 0.95", "start 0.75"]}
            text="Some very glitzy projects"
          />

          <p className="font-helveticaMediumItalic text-4xl text-foreground/50 tracking-wide mt-6">04</p>
        </div>
      </div>

      <div className="w-full grid gap-4 md:grid-cols-2">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center mt-20">
        <Button label="All projects" />
      </div>
    </section>
  );
}
