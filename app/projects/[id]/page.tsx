const ProjectPage = async ({ params }: { params: { id: number } }) => {
  const response = await fetch("http://localhost:3000/projects.json");
  const projectData = await response.json();
  const project = projectData.find(
    (proj: { id: number }) => proj.id === Number(params.id)
  );
  if (!project) {
    return <h1>Project not found</h1>;
  }
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.date}</p>
    </div>
  );
};

export default ProjectPage;
