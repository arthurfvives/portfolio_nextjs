import ProjectCard from "@/components/projectCard";
import { Project } from "@/types/Project";

export default async function HomePage() {
  const projects = await fetch("http://localhost:3000/projects.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch projects: ${res.statusText}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching projects:", error);
      return [];
    });

  return (
    <>
      <div className="timeline fixed left-1/2 -translate-x-1/2 w-1 h-screen bg-gray-200 z-10"></div>
      <ul className="relative z-20">
        {projects.map((project: Project, i: number) => (
          <li
            key={project.id}
            className="relative flex w-full mb-16 items-center">
            {/* Timeline dot */}
            <div className="absolute left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gray-200 border-2 border-gray-200"></div>
            </div>

            {i % 2 === 0 ? (
              <>
                {/* Card on left */}
                <div className="w-1/2 flex justify-end pr-8">
                  <ProjectCard project={project} />
                </div>
                {/* Description on right */}
                <div className="w-1/2 pl-8">
                  <h1 className="text-xl font-bold">{project.title}</h1>
                  <p>{project.description}</p>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
              </>
            ) : (
              <>
                {/* Description on left */}
                <div className="w-1/2 pr-8 text-right">
                  <h1 className="text-xl font-bold">{project.title}</h1>
                  <p>{project.description}</p>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
                {/* Card on right */}
                <div className="w-1/2 flex justify-start pl-8">
                  <ProjectCard project={project} />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
