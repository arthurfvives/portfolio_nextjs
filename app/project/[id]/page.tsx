export default function ProjectPage({ params }: { params: { id: string } }) {
  return <h1>Project Page: {params.id}</h1>;
}
