import { PrismaClient } from "@prisma/client";
import { Project } from "../types";

export default class ProjectRepository {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getProjects(): Promise<Project[]> {
    return (await this.prisma.project.findMany()) as Project[];
  }
}
