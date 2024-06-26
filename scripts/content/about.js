function aboutFunction() {
  let contentContainer = document.getElementById('content-container'); 
  contentContainer.innerHTML = '';
  
  let welcomeDiv = document.createElement('div');
  welcomeDiv.id = 'welcome';
  let welcomeParagraph = document.createElement('p');
  welcomeParagraph.innerText = 'Hello, my name is';
  let nameText = document.createElement('h3');
  nameText.innerText = 'LASHA TVAURI';
  let welcomeSpan = document.createElement('span');
  welcomeSpan.innerText = 'I`m a beginner full stack web developer';
  welcomeDiv.appendChild(welcomeParagraph);
  welcomeDiv.appendChild(nameText);
  welcomeDiv.appendChild(welcomeSpan);
  
  let paragraphContainer = document.createElement('div');
  paragraphContainer.id = 'paragraph-container';
  let paragraph = document.createElement('p');
  paragraph.innerText = '';
  paragraph.className = "typing-animation";
  paragraphContainer.appendChild(paragraph);
  
  contentContainer.appendChild(welcomeDiv);
  contentContainer.appendChild(paragraphContainer);

  animateTyping(paragraph, paragraphContainer,"I started learning web development in my free time. First I got acquainted with Html and Css, then with Javascript. I'm also learning Mysql and Php because I started using them in my projects.");
}  

function animateTyping(paragraph, container, text) {
  var words = text.split(' ');
  var line = '';
  
  function appendWord(word) {
    line += (line.length > 0 ? ' ' : '') + word;
    paragraph.innerText = line;

    if (paragraph.offsetWidth > container.offsetWidth) {
      paragraph.innerHTML += '<br>';
      line = word;
      paragraph.innerText = line;
    }
  }
  
  setTimeout(function() {
    var i = 0;
    var typingEffect = setInterval(function() {
      if (i < words.length) {
        appendWord(words[i]);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);
  }, 1000);
}

