import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjecId: undefined,
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjecId: null,

      }
    });
  }

  
  let content ;
  if(projectState.selectedProjecId === null)
  {
    content = <NewProject/>
  }
  else if(projectState.selectedProjecId === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAddProject={handleStartAddProject} />

       {content}
       
      </main>
    </>
  );
}

export default App;
