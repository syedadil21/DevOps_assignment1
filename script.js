        const projects = [
        { name: "Bus Management System", technology: "C#" },
        { name: "Big Data Management", technology: "C++" },
        { name: "Weather Application", technology: "Reactjs" },
        { name: "Real Estate Website", technology: "Nextjs" },
    ];

    

    function filterProjects() {
        const selectedTechnology = document.getElementById("technologyDropdown").value;

        let filteredProjects = projects;

        if (selectedTechnology !== "all") {
            filteredProjects = projects.filter(project => project.technology === selectedTechnology);
        }

        displayProjects(filteredProjects);
    }

    function displayProjects(projects) {
        const projectList = document.getElementById("projectList");

        
            projects.forEach(project => {
                const li = document.createElement("li");
                li.textContent = `${project.name} - ${project.technology}`;
                projectList.appendChild(li);
            });
        
    }

    displayProjects(projects);
