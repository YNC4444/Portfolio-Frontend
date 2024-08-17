import { title } from "process"
import { Fragment } from "react";
import { getSkills } from "../api/page"

export const metadata = {
  title: "Skills"
};

export default async function skillsPage() {
  const skills = await getSkills();
  return(
    <>
      <main>
        <h1>Skills</h1>
        <ul>
          {skills.map((skill) => (
            <Fragment key={skill._id}>
              <li>{skill.Skill} </li>
            </Fragment>
          ))}
        </ul>
      </main>
    </>
  );
}