function homeFunction() {
    let contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '';
  
    let contentWrapper = document.createElement('div');
    contentWrapper.id = 'content-wrapper';
    
    setTimeout(function() {
      contentWrapper.style.transform = 'rotateY(0deg)';
      contentWrapper.style.display = 'block';

    }, 300);
  
    contentContainer.appendChild(contentWrapper);

    
  
    let elements = [
      '<h3>Welcome to Lasha`s Web Development Home page</h3>',
      '<p>Web development involves creating websites and web applications. It encompasses various technologies and techniques. I use some of them listed here:</p>',
      '<ul>',
      '<li style="color: #87d75b;">HTML </li>',
      '<li style="color: #87d75b;">CSS </li>',
      '<li style="color: #87d75b;">Tailwind CSS</li>',
      '<li style="color: #87d75b;">Blade </li>',
      '<li style="color: #ff9933;">JS </li>',
      '<li style="color: #ff9933;">jQuery </li>',
      '<li style="color: #fc3131;">MySQL </li>',
      '<li style="color: #fc3131;">PHP </li>',
      '<li style="color: #fc3131;">Laravel </li>',
      '</ul>',
      '<p>These technologies allow me to create custom solutions.</p>'
    ];
  
    function createAndAppendElementWithDelay(htmlString, parentElement, delay) {
      setTimeout(function() {
        var tempElement = document.createElement('div');
        tempElement.innerHTML = htmlString;
        if (htmlString.includes('<li')) {
            tempElement.style.paddingLeft = '30px';
            tempElement.style.animation = 'unfold 0.5s ease';
          }
        
        tempElement.style.fontSize = '90%';
        parentElement.appendChild(tempElement);
  
      }, delay * 200);
    }
  
    var delay = 1.5;
    elements.forEach(function(element) {
      createAndAppendElementWithDelay(element, contentWrapper, delay++);
    });
  }

  
  