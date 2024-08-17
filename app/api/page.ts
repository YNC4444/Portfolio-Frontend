interface project {
  _id: string;
  Link: string;
  README: string;
}

interface skill {
  _id: string;
  Skill: string;
}

async function getSkills(): Promise<skill[]> {
  const response = await fetch("https://portfolio-api-513e.onrender.com/api/skills");
  let skillData: skill[] = await response.json();
  return skillData;
}

async function getProjects(): Promise<project[]> {
  const response = await fetch("https://portfolio-api-513e.onrender.com/api/projects");
  let projectData: project[] = await response.json();
  return projectData;
}

export{
  getSkills,
  getProjects
};


