import { PencilIcon } from "@heroicons/react/20/solid";
import { Project, ProjectStatus } from "../types";
import Link from "next/link";
import classNames from "@/app/utils/classNames";

interface ProjectListingProps {
  projects: Project[];
}
export default function ProjectListing(props: ProjectListingProps) {
  const { projects } = props;
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <li
          key={project.id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {project.name}
                </h3>
                <StatusPill status={project.status} />
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {project.description}
              </p>
            </div>

            <img
              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              src={project.imageUrl}
              alt={project.name}
            />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <Link
                  href={`/projects/${project.id}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PencilIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

interface StatusPillProps {
  status: ProjectStatus;
}

function StatusPill(props: StatusPillProps) {
  const statusColors =
    props.status === "active"
      ? "bg-green-50 text-green-700 ring-green-600/20"
      : "bg-red-50 text-red-700 ring-red-600/20";
  return (
    <span
      className={classNames(
        "inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset capitalize",
        statusColors
      )}
    >
      {props.status}
    </span>
  );
}
