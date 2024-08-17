import { title } from "process";
import { Fragment } from "react";
import { getProjects } from "../api/functions";

export const metadata = {
  title: "Projects"
};

export default async function projectsPage() {
  const projects = await getProjects();
  
  return(
    <>
      <main>
        <h1>Projects</h1>
        <ul>
          {projects.map((project) => (
            <Fragment key={project._id}>
              <li >{project.Link}</li>
              <li>{project.README}</li>
            </Fragment>
          ))}
        </ul>
      </main>
    </>
  );
}