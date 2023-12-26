"use client";
import Shell from "@/app/components/Shell";
import ProjectForm from "../components/ProjectForm";

export default function NewProjectPage() {
  return (
    <Shell page="projects">
      <ProjectForm />
    </Shell>
  );
}
