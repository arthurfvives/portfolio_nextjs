import { Project } from "@/types/Project";
import ProjectImage from "@/components/projectImage";

export default async function Page() {
  const projects = await fetch("http://localhost:3000/projects.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching projects:", error);
      return [];
    });

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {projects.map((project: Project) => (
        <div key={project.id} className="break-inside-avoid mb-4">
          <ProjectImage project={project} />
        </div>
      ))}
    </div>
  );
}
