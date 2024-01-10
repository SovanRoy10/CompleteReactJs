import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjecId: undefined,
    projects: [],
    tasks: []
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjecId: null,

      }
    });
  }

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        selectedProjecId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  //console.log(projectState.projects)

  const handleCancelAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjecId: undefined,
      }
    })
  }


  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjecId: id,

      }
    });
  }

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjecId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjecId)
      }
    })
  }

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectId: prevState.selectedProjecId
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjecId)
  // console.log(selectedProject)
  let content = <SelectedProject
    project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks}
  />;

  if (projectState.selectedProjecId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelAddProject} />
  }
  else if (projectState.selectedProjecId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId = {projectState.selectedProjecId}
        />

        {content}

      </main>
    </>
  );
}

export default App;
