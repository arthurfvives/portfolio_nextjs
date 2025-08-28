"use client";
import { Project } from "@/types/Project";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  useGSAP(() => {
    gsap.to("#cardImage", {
      startAt: { x: -250 },
      x: 0,
      duration: 1,
    });
  }, []);
  return (
    <div id="cardImage">
      <img src={project.floorplanUrl} alt={project.title} className="w-lg" />
    </div>
  );
}
