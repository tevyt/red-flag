import { NextResponse } from "next/server";
import ProjectService from "../services/ProjectsService";

export async function GET() {
  const projectService = new ProjectService();

  const projects = await projectService.getProjects();

  return NextResponse.json({ projects });
}
