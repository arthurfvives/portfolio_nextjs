import Image from "next/image";

const ProjectPage = async ({ params }: { params: { id: number } }) => {
  const response = await fetch("http://localhost:3000/projects.json");
  const projectData = await response.json();
  const project = projectData.find(
    (proj: { id: number }) => proj.id === Number(params.id)
  );
  if (!project) {
    return (
      <h1 className="text-2xl font-bold text-center mt-10">
        Project not found
      </h1>
    );
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-500 mb-4">{project.date}</p>
      <p className="mb-8">{project.description}</p>
      {project.images && project.images.length > 0 && (
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {project.images.map((img: string, idx: number) => (
            <div
              key={idx}
              className="break-inside-avoid mb-4 rounded overflow-hidden shadow">
              <Image
                src={img}
                alt={`${project.title} image ${idx + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      )}
      {(!project.images || project.images.length === 0) && (
        <p className="text-gray-400 italic">
          No images available for this project.
        </p>
      )}
    </div>
  );
};

export default ProjectPage;
