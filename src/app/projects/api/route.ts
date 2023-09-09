import { NextResponse } from "next/server";
import { Project } from "../types";

export async function GET() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Project 1",
      description: "This is a description of project 1",
      imageUrl: "https://picsum.photos/200/200",
      status: "inactive",
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is a description of project 2",
      imageUrl: "https://picsum.photos/200/200",
      status: "active",
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is a description of project 3",
      imageUrl: "https://picsum.photos/200/200",
      status: "active",
    },
  ];

  return NextResponse.json({ projects });
}
