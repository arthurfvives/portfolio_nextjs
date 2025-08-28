import { Project } from "@/types/Project";
import ProjectCard from "@/components/projectCard";

export default async function Page() {
  const projects = await fetch("http://localhost:3000/projects.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching projects:", error);
      return [];
    });
  return (
    <div>
      <h1>Project Page</h1>
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
