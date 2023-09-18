import { PrismaClient } from "@prisma/client";
import { Project } from "../types";
import { ProjectCreationRequest } from "../api/types";

export default class ProjectRepository {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getProjects(): Promise<Project[]> {
    return (await this.prisma.project.findMany()) as Project[];
  }

  async postProject(newProject: ProjectCreationRequest): Promise<Project> {

    let name: string = newProject.name
    let description: string = newProject.description
    let logo: string = newProject.logo
    let status: string = newProject.status

    const res = await this.prisma.project.create({
      data: {
        name: name,
        description: description,
        logo: logo,
        status: status,
      },
    })

    return res as Project;

  }
}
