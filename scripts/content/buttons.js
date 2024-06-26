const menuButtons = document.querySelectorAll('#menu .menuButton');
menuButtons.forEach(button => {
    button.onclick = function() {
        menuButtons.forEach(btn => {
            btn.style.color = 'rgba(255, 255, 255, 0.67)';
        });
        this.style.color = 'rgb(255, 244, 119)';

        switch (this.innerText) {
            case 'Home':
                homeFunction();
                break;
            case 'About':
                aboutFunction();
                break;                
            case 'Projects':
                projectsFunction();
                break;
            case 'Contact':
                contactFunction();
                break;
            default:
                break;
        }        
    };
});
