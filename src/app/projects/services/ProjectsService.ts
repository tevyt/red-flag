import ProjectsRepository from "../db/ProjectsRepository";
import { Project } from "../types";

export default class ProjectService {
  private projectRepository: ProjectsRepository;
  constructor() {
    this.projectRepository = new ProjectsRepository();
  }

  async getProjects(): Promise<Project[]> {
    return await this.projectRepository.getProjects();
  }
}
