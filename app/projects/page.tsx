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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project: Project) => (
          <div key={project.id} className="text-center">
            <ProjectImage project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
