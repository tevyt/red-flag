"use client";
import { useState, useEffect } from "react";
import Shell from "../components/Shell";
import ProjectListing from "./components/ProjectListing";
import Loading from "../components/Loading";
import ErrorMessageModal from "./components/ErrorMessageModal";
import { Project } from "./types";

export default function Projects() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<Project[] | undefined>();
  const [error, setError] = useState<any>();

  const loadProjects = async () => {
    setLoading(true);
    setError(undefined);
    setProjects(undefined);
    try {
      const response = await fetch("/projects/api");

      if (response.ok) {
        const { projects } = await response.json();
        setProjects(projects);
        setLoading(false);
      } else {
        setProjects(undefined);
        setLoading(false);
        setError(response);
        console.error(response);
      }
    } catch (e) {
      setProjects(undefined);
      setLoading(false);
      setError(e);
      console.error(e);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <Shell page="projects">
      {projects && <ProjectListing projects={projects} />}
      {loading && <Loading />}
      <ErrorMessageModal
        open={Boolean(error)}
        onClose={loadProjects}
        message="Unable to load your projects."
        details="If the problem persists contact an Administrator."
        closeText="Try Again"
      />
    </Shell>
  );
}
