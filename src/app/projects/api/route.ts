import { NextResponse } from "next/server";
import ProjectRepository from "../db/ProjectRepository";

export async function GET() {
  const projectRepository = new ProjectRepository();
  const projects = await projectRepository.getProjects();

  return NextResponse.json({ projects });
}
