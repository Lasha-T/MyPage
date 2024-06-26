function projectsFunction() {
    // Get the content container
    let contentContainer = document.getElementById('content-container');
  
    // Clear the content container
    contentContainer.innerHTML = '';
    
    let projectsTitle = document.createElement('div');
    projectsTitle.id = 'projects-title';
    projectsTitle.innerHTML = '<p>Lasha`s Inventory Management System application projects for desktop browsers</p>';
    projectsTitle.style.animation = 'rollout 0.5s ease forwards';
    contentContainer.appendChild(projectsTitle);

    // Define an array of objects containing the content for each project
    let projectContent = [
        {
        title: 'LimsJQ',
        description: 'First version of the project with the most functionality.',
        used: 'HTML, CSS, JavaScript, MySQL, PHP, jQuery, DataTables',
        url: 'https://www.youtube.com/watch?v=0p0k7pchORc'
        },
        {
        title: 'LimsBV',
        description: 'Second version of the project with base functionality and different approach.',
        used: 'HTML, CSS, JavaScript, MySQL, PHP',
        url: 'http://limsbv.infinityfreeapp.com/'
        }
    ];

    // Create projects div wrapper
    let projectsDivWrapper = document.createElement('div');
    projectsDivWrapper.id = 'projects-div-wrapper';
    projectsDivWrapper.classList.add('slide-up'); // Add class for slide-up animation

    // Create and append project divs inside the projects div wrapper
    for (let i = 0; i < projectContent.length; i++) {
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('project-div');
        projectDiv.id = `project-${i + 1}`; // Assign unique ID to each project div

        // Create anchor tag with href attribute set to the project URL
        let anchorTag = document.createElement('a');
        anchorTag.href = projectContent[i].url;
        anchorTag.target = '_blank'; // Open link in new tab
        anchorTag.textContent = projectContent[i].title;

        // Append anchor tag to project div
        projectDiv.appendChild(anchorTag);

        // Add description to project div
        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = projectContent[i].description;
        projectDiv.appendChild(descriptionParagraph);

        // Add technologies used to project div
        let usedTechnologiesParagraph = document.createElement('p');
        usedTechnologiesParagraph.classList.add('usedT');
        usedTechnologiesParagraph.innerHTML = `<span class="used-prefix">Used: </span>${projectContent[i].used}`;
        projectDiv.appendChild(usedTechnologiesParagraph);        

        projectsDivWrapper.appendChild(projectDiv);
    }

    // Append the projects div wrapper to the content container
    contentContainer.appendChild(projectsDivWrapper);
    
  }
  