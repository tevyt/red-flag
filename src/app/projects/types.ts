export type ProjectStatus = "active" | "inactive";

export type Project = {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  logo: string;
};

