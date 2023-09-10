jest.mock("../../db/ProjectsRepository");
import { describe, expect, it } from "@jest/globals";
import ProjectService from "../ProjectsService";

describe("ProjectsService", () => {
  describe("getProjects", () => {
    it("returns a list of projects from the database.", async () => {
      const projectService = new ProjectService();
      const projects = await projectService.getProjects();
      expect(projects).toHaveLength(2);
    });
  });
});
