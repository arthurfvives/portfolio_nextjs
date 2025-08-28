import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <img src={project.floorplanUrl} alt={project.title} className="w-lg" />
    </div>
  );
}
