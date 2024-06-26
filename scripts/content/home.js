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
      '<p>Web development involves creating websites and web applications. It encompasses various technologies and techniques.</p>',
      '<ul>',
      '<li style="color: #ffcc00;">HTML (HyperText Markup Language)</li>',
      '<li style="color: #00ccff;">CSS (Cascading Style Sheets)</li>',
      '<li style="color: #ff6666;">JS (JavaScript)</li>',
      '<li style="color: #ff99cc;">MySQL (Structured Query Language)</li>',
      '<li style="color: #66cc66;">PHP (Hypertext Preprocessor)</li>',
      '<li style="color: #ff9933;">jQuery (JavaScript library)</li>',
      '</ul>',
      '<p>These technologies allows me to create dynamic and interactive web experiences.</p>'
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

  
  