function contactFunction() {
    // Get the content container
    let contentContainer = document.getElementById('content-container');

    // Clear the content container
    contentContainer.innerHTML = '';

    let contactDivWrapper = document.createElement('div');
    contactDivWrapper.id = 'contact-div-wrapper';
    contactDivWrapper.classList.add('slide-in');

    // Append the contact div wrapper to the content container
    contentContainer.appendChild(contactDivWrapper);

    contactDivWrapper.style.display = 'block';

    setTimeout(function() {
      contactDivWrapper.classList.add('swinging-animation');
    }, 700);

    setTimeout(function() {
      contactDivWrapper.classList.remove('swinging-animation');
      contactDivWrapper.classList.add('stop-swinging-animation');
    }, 2700);

    // Create content elements for contact
    let elements = [
        '<h3>Contact Me</h3>',
        '<p class="contact"><a href="mailto:Lasha4400@Live.com"><i class="fas fa-envelope"></i>&nbsp;Email</p>',
      ];

    // Function to create and append elements to contactDivWrapper with staggered effect
    function createAndAppendElementWithDelay(htmlString, parentElement, delay) {
      setTimeout(function() {
        let tempElement = document.createElement('div');
        tempElement.innerHTML = htmlString;

        parentElement.appendChild(tempElement);
      }, delay * 300);
    }

    // Append content elements to contactDivWrapper with staggered effect
    let delay = 1;
    elements.forEach(function(element) {
      createAndAppendElementWithDelay(element, contactDivWrapper, delay++);
    });
  }
