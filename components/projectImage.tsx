import { Project } from "@/types/Project";
import Link from "next/link";
interface ProjectImageProps {
  project: Project;
}

export default function ProjectImage({ project }: ProjectImageProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block relative">
      <img
        src={project.floorplanUrl}
        alt={project.title}
        className="w-lg object-cover transition-transform duration-300 group-hover:brightness-95"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="size-10">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </Link>
    //className="w-full h-52 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
  );
}
