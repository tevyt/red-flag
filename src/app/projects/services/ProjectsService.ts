import { ProjectCreationRequest } from "../api/types";
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
  async postProject(project: ProjectCreationRequest): Promise<Project> {
    return await this.projectRepository.postProject(project);
  }
  async putProject(id:number, data:object): Promise<Project> {
    return await this.projectRepository.putProject(id, data);
    
  }

}
