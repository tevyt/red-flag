import { Project } from "../types";

export type ProjectsResponse = {
  projects: Project[];
};

export type ProjectCreationRequest = {
  name: string,
  description: string,
  status: string,
  logo: string
};