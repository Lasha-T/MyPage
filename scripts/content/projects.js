function projectsFunction() {
    // Get the content container
    let contentContainer = document.getElementById('content-container');
  
    // Clear the content container
    contentContainer.innerHTML = '';
    
    // Array of lines as raw HTML strings
    let titles = [
        '<p><span> Lasha`s Inventory Management System</span> web application projects</p>',
        '<p><span> Personalized</span> web site projects</p>'
    ];

    // Function to create and append a topLine element
    function createTitle(title) {
        let topLine = document.createElement('div');
        topLine.classList.add('top-line');
        topLine.innerHTML = title; // Use the raw HTML string
        topLine.style.animation = 'rollout 0.5s ease forwards';
        contentContainer.appendChild(topLine);
    }

    // Define an array of objects containing the content for each project
    let projectContent1 = [
        {
        title: 'LimsJQ',
        description: 'First version of the project with the expanded functionality.',
        used: 'HTML, CSS, JavaScript, MySQL, PHP, jQuery, DataTables',
        preview: 'https://www.youtube.com/watch?v=0p0k7pchORc'
        },
        {
        title: 'LimsBV',
        description: 'Second version of the project with base functionality and different approach.',
        used: 'HTML, CSS, JavaScript, MySQL, PHP',
        url: 'http://limsbv.infinityfreeapp.com/',
        github: 'https://github.com/Lasha-Tvauri/Lims-bv'
        },
        {
        title: 'LimsLV',
        description: 'Third version of the project with optimized functionality.',
        used: 'HTML, Blade, Tailwind CSS, JS, MySQL, PHP, Laravel',
        preview: 'https://www.youtube.com/watch?v=4BCfq4iqCDM',
        url: 'https://limslv.infinityfreeapp.com/',
        github: 'https://github.com/Lasha-Tvauri/LimsLv'
        }
    ];

    let projectContent2 = [
        {
        title: 'Photography',
        description: 'Dimitri Meliqidze Photography personal website',
        used: 'HTML, CSS, JS, PHP',
        url: 'https://dimitri-meliqidze.my-style.in'
        }
    ];

    
    function createPrDivs(projectContent){
    // Create projects div wrapper
    let projectsDivWrapper = document.createElement('div');
    // projectsDivWrapper.id = 'projects-div-wrapper';
    projectsDivWrapper.classList.add('slide-up', 'projects-div-wrapper'); // Add class for slide-up animation    
    // Create and append project divs inside the projects div wrapper
    for (let i = 0; i < projectContent.length; i++) {
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('project-div');
        // Assign unique ID to each project div
        // projectDiv.id = `project-${i + 1}`; 

        // Create anchor tag with href attribute set to the project URL
        let anchorTag = document.createElement('a');
        if(projectContent[i].url){
            anchorTag.classList.add('project-title1');
            anchorTag.href = projectContent[i].url;
        }else{
            anchorTag.classList.add('project-title2');
        }
        anchorTag.target = '_blank'; // Open link in new tab
        anchorTag.textContent = projectContent[i].title;

        // Append anchor tag to project div
        projectDiv.appendChild(anchorTag);

        // Add description to project div
        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = projectContent[i].description;
        descriptionParagraph.classList.add('p_desc');
        projectDiv.appendChild(descriptionParagraph);

        // Add technologies used to project div
        let usedTechnologiesParagraph = document.createElement('p');
        usedTechnologiesParagraph.classList.add('usedT');
        usedTechnologiesParagraph.innerHTML = `<span class="used-prefix">Used: </span>${projectContent[i].used}`;
        projectDiv.appendChild(usedTechnologiesParagraph);
        
        // Add preview link
        if(projectContent[i].preview){
            let previewText = document.createElement('p');
            previewText.innerHTML = `<span class="used-prefix">Preview: </span><a href="${projectContent[i].preview}" target="_blank" class="previewTag">Video</a>`;
            projectDiv.appendChild(previewText);
        }

        // Add github link
        if(projectContent[i].github){
            let githubLink = document.createElement('p');
            githubLink.innerHTML = `<span class="used-prefix">Github: </span><a href="${projectContent[i].github}" target="_blank" class="githubTag">Project</a>`;
            projectDiv.appendChild(githubLink);
        }
        


        projectsDivWrapper.appendChild(projectDiv);
    }
    // Append the projects div wrapper to the content container
    contentContainer.appendChild(projectsDivWrapper);
}

createTitle(titles[0]);

createPrDivs(projectContent1);

createTitle(titles[1]);

createPrDivs(projectContent2);


}
  